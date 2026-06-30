# 컨벤션에 맞는 작업 브랜치 생성 (upstream 동기화 후 분기)
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("feature", "docs", "fix", "chore", "refactor")]
    [string]$Type,

    [Parameter(Mandatory = $true)]
    [string]$Name,

    [switch]$SkipSync
)

$ErrorActionPreference = "Stop"

$slug = $Name.ToLower() -replace '\s+', '-' -replace '[^a-z0-9가-힣\-]', '' -replace '-+', '-' -replace '^-|-$', ''
if (-not $slug) {
    throw "브랜치 이름이 비어 있습니다. 영문/숫자/한글로 작업 설명을 입력하세요."
}

$branch = "$Type/$slug"

if (-not $SkipSync) {
    Write-Host "upstream 동기화 후 브랜치를 생성합니다..."
    & "$PSScriptRoot\sync-upstream.ps1"
}

Write-Host "브랜치 생성: $branch"
git checkout -b $branch

Write-Host "완료. 작업 후 커밋 예시:"
Write-Host "  git add ."
Write-Host "  git commit -m `"$Type`: 작업 내용 요약`""

#progress_<닉네임>.md 초기 생성
param(
    [Parameter(Mandatory = $true)]
    [string]$Nickname,

    [string]$DisplayName = "",

    [switch]$Force
)

$ErrorActionPreference = "Stop"

$slug = $Nickname.ToLower() -replace '[^a-z0-9_-]', '' -replace '^[_-]+|[_-]+$', ''
if (-not $slug) {
    throw "닉네임은 영문·숫자·하이픈·언더스코어로 입력하세요. 예: jeonghj, codeNBogus"
}

$repoRoot = Split-Path $PSScriptRoot -Parent

$membersDir = Join-Path $repoRoot "cohorts\ai-agent\members"
$templatePath = Join-Path $repoRoot ".cursor\skills\kookmin-team-workflow\progress-template.md"
$outPath = Join-Path $membersDir "progress_$slug.md"

if ((Test-Path $outPath) -and -not $Force) {
    Write-Host "이미 존재합니다: cohorts/ai-agent/members/progress_$slug.md"
    Write-Host "덮어쓰려면 -Force 를 사용하세요."
    exit 1
}

if (-not (Test-Path $templatePath)) {
    throw "템플릿을 찾을 수 없습니다: $templatePath"
}

$now = Get-Date
$today = "{0}년 {1}월 {2}일" -f $now.Year, $now.Month, $now.Day
$label = if ($DisplayName) { $DisplayName } else { $slug }
$content = Get-Content $templatePath -Raw -Encoding UTF8
$content = $content -replace 'YYYY년 M월 D일', $today
$content = $content -replace '# 작업 진행 기록', "# 작업 진행 기록 — $label"

Set-Content -Path $outPath -Value $content -Encoding UTF8 -NoNewline
Add-Content -Path $outPath -Value "`n"

Write-Host "생성 완료: cohorts/ai-agent/members/progress_$slug.md"
Write-Host ""
Write-Host "다음 단계:"
Write-Host "  1. 파일을 열어 작업 목표를 본인에 맞게 수정"
Write-Host "  2. 작업 시작 시 '현재 상태' 표에 진행 중 행 추가"
Write-Host "  3. 작업 완료 후 완료된 작업 섹션 갱신"

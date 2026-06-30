# 포크 브랜치에서 upstream으로 PR 생성 (GitHub CLI 필요)
param(
    [Parameter(Mandatory = $true)]
    [string]$Title,

    [string]$Body = "",

    [string]$Base = "main",

    [string]$ForkOwner = "",

    [string]$UpstreamRepo = "nxtcloud-edu/2026-kookmin-ai-workflow-team3"
)

$ErrorActionPreference = "Stop"
. "$PSScriptRoot\lib\git-remote.ps1"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI(gh)가 설치되어 있지 않습니다. https://cli.github.com/ 에서 설치하거나 GitHub 웹에서 PR을 열어주세요."
}

if (-not $ForkOwner) {
    $ForkOwner = Get-ForkOwner
}

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -eq "main") {
    Write-Warning "main 브랜치로 PR을 생성합니다. 가능하면 feature/docs 등 작업 브랜치를 사용하세요."
}

if ($Title -notmatch '^(feat|fix|docs|style|refactor|test|chore): ') {
    Write-Warning "PR 제목이 컨벤션(type: 요약)을 따르지 않습니다. 예: docs: Git 워크플로우 추가"
}

Write-Host "PR 생성: $ForkOwner`:$branch -> $UpstreamRepo ($Base)"

gh pr create `
    --repo $UpstreamRepo `
    --base $Base `
    --head "${ForkOwner}:${branch}" `
    --title $Title `
    --body $Body

# 현재 브랜치를 origin(포크)에 push
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\lib\git-remote.ps1"

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -eq "main") {
    Write-Warning "main 브랜치를 push합니다. 기능 작업은 작업 브랜치에서 PR을 여는 것을 권장합니다."
}

Write-Host "origin/$branch 에 push 합니다..."
git push -u origin $branch

$forkUrl = Get-ForkRepoUrl
Write-Host "완료. 포크에서 upstream으로 PR을 열 수 있습니다:"
Write-Host "  $forkUrl"

# upstream 최신 내용을 fetch 후 main에 merge
$ErrorActionPreference = "Stop"

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -ne "main") {
    Write-Host "main 브랜치로 전환합니다 (현재: $branch)..."
    git checkout main
}

Write-Host "upstream fetch..."
git fetch upstream

Write-Host "upstream/main -> main merge..."
git merge upstream/main

Write-Host "완료. 현재 HEAD:"
git log --oneline -1

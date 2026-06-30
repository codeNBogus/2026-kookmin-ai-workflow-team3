# Cursor sessionStart: inject team workflow checklist
$ErrorActionPreference = "SilentlyContinue"

$context = @"
팀3 저장소 작업 절차 (AGENTS.md):

1. 작업 시작 전: .\scripts\sync-upstream.ps1
2. 읽기: Docs/project.md, Docs/events.md(해당 시), cohorts/ai-agent/members/progress_*.md
3. 작업 브랜치: .\scripts\new-branch.ps1 (main에서 직접 작업 금지)
4. 작업 후: progress_<닉네임>.md 갱신 (없으면 init-member-progress.ps1)
5. 커밋/push/PR은 사용자가 요청할 때만

상세: AGENTS.md, member-progress 스킬, Docs/git-workflow.md
"@

$payload = @{
    additional_context = $context
} | ConvertTo-Json -Compress

Write-Output $payload
exit 0

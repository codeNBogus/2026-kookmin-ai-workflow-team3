# 2026-kookmin-ai-workflow-team3
2026 국민대 AI Workflow 팀 3 프로젝트 저장소

## Git 워크플로우

브랜치·커밋·PR 컨벤션과 작업 절차는 [Docs/git-workflow.md](Docs/git-workflow.md)를 참고하세요.

```powershell
# 작업 전 동기화
.\scripts\sync-upstream.ps1

# 컨벤션 브랜치 생성 (예: docs/git-workflow)
.\scripts\new-branch.ps1 -Type docs -Name 작업-설명

# 커밋 후 포크에 push
git commit -m "docs: 작업 내용 요약"
.\scripts\push-to-fork.ps1
```

---
name: kookmin-team-workflow
description: >-
  국민대 AI Workflow 팀3 저장소 작업 절차. upstream 동기화, Docs/cohorts 진행
  상황 파악, progress 기록 갱신, git-workflow 준수. 작업 시작, 문서 작성,
  조사, 코호트 기록, upstream sync, PR 요청 시 사용.
---

# 팀3 작업 워크플로

에이전트 종류와 무관한 전체 절차는 [AGENTS.md](../../AGENTS.md)를 따른다. 이 스킬은 Cursor에서 실행할 때의 **구체적 순서**다.

## 작업 시작 체크리스트

```
- [ ] upstream 동기화 (.\scripts\sync-upstream.ps1)
- [ ] Docs/project.md 읽기
- [ ] 작업 관련 Docs/ 파일 확인 (events.md, 기존 조사 문서 등)
- [ ] cohorts/ai-agent/members/progress_<이름>.md 읽기
- [ ] progress 파일에 진행 중 행 추가
- [ ] 필요 시 new-branch.ps1로 작업 브랜치 생성
```

## Upstream 동기화

```powershell
git checkout main
.\scripts\sync-upstream.ps1
```

`upstream` 원격 미설정 시 AGENTS.md 및 Docs/git-workflow.md §1을 안내한다.

## 맥락 읽기 우선순위

1. `Docs/project.md` — 프로젝트 목표
2. `Docs/events.md` — 이벤트·분기 작업 시
3. `cohorts/ai-agent/members/progress_*.md` — 팀·개인 진행 상황
4. `Docs/git-workflow.md` — Git 작업 시
5. `image/STYLE_GUIDE.md` — 이미지 작업 시

사용자가 본인 progress 파일을 지정하지 않으면 `progress_jeon.md` 외 다른 `progress_*.md`가 있는지 확인하고, 없으면 [progress-template.md](progress-template.md)로 새 파일 생성을 제안한다.

## 진행 기록 갱신

작업 시작·완료 시 **반드시** 해당 팀원의 `progress_<이름>.md`를 갱신한다.

- 시작: `현재 상태` 표에 `진행 중` 행 추가
- 완료: 상태 `완료`, `완료된 작업` 섹션 추가, `최종 업데이트` 날짜 수정
- 상세 형식: [progress-template.md](progress-template.md)

## Git 규칙

- `main`에 직접 기능 작업 금지
- 커밋·push·PR은 **사용자 명시 요청 시에만**
- 브랜치·커밋·PR 제목: Docs/git-workflow.md 컨벤션 (`docs:`, `feat:` 등)
- PR 본문: `.github/pull_request_template.md` 채우기

```powershell
.\scripts\new-branch.ps1 -Type docs -Name 작업-설명
.\scripts\push-to-fork.ps1
.\scripts\open-upstream-pr.ps1 -Title "docs: 요약"
```

## 금지 사항

- `.env`, API 키, 개인정보 커밋
- `git push --force` (사용자 명시 없이)
- upstream `main` 직접 push
- progress 갱신 없이 Docs/cohorts 작업만 종료

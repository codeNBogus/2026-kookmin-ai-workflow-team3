# 에이전트 작업 가이드

> 2026 국민대 AI Workflow 팀 3 — **모든 코딩 에이전트 공통** 절차  
> (Cursor, Claude Code, Copilot, ChatGPT 등 도구가 달라도 동일하게 따른다)

## 작업 시작 전

1. **저장소 동기화** — upstream 최신 내용 반영

   ```powershell
   git checkout main
   .\scripts\sync-upstream.ps1
   ```

   `upstream` 원격이 없으면 [Docs/git-workflow.md](Docs/git-workflow.md)의 최초 설정을 따른다.

2. **프로젝트 맥락 읽기**

   | 파일 | 용도 |
   |------|------|
   | [Docs/project.md](Docs/project.md) | 프로젝트 목표·구조 |
   | [Docs/events.md](Docs/events.md) | 이벤트·시나리오 작업 시 |
   | [Docs/git-workflow.md](Docs/git-workflow.md) | 브랜치·커밋·PR 규칙 |
   | `cohorts/ai-agent/members/progress_<이름>.md` | 본인 진행 기록 |

3. **작업 브랜치 생성** (기능·문서 작업 시)

   ```powershell
   .\scripts\new-branch.ps1 -Type docs -Name 작업-설명
   ```

   `main`에서 직접 작업하지 않는다.

4. **진행 기록 시작** — 본인 `progress_*.md`의 `현재 상태` 표에 `진행 중` 행 추가

## 작업 중

- 이벤트·문서 작업은 [Docs/events.md](Docs/events.md)와 기존 조사 문서(`Docs/`) 형식을 맞춘다.
- 외부 자료 조사 시 **조사 기준일**과 **출처**를 문서에 남긴다.
- 커밋·push·PR은 **사용자가 요청할 때만** 수행한다.

## 작업 완료 후

1. **진행 기록 갱신** (`cohorts/ai-agent/members/progress_<이름>.md`)

   - `최종 업데이트` 날짜 수정
   - `현재 상태` 표: `진행 중` → `완료`, 결과물 경로 기록
   - `완료된 작업` 섹션에 요약·결과물 링크 추가
   - `다음 작업` 섹션 갱신

   형식은 [cohorts/ai-agent/members/progress_jeon.md](cohorts/ai-agent/members/progress_jeon.md)와 [progress-template.md](.cursor/skills/kookmin-team-workflow/progress-template.md)를 참고한다.

2. **에이전트 사용 요약** (선택) — [cohorts/ai-agent/members/README.md](cohorts/ai-agent/members/README.md) 템플릿에 사용한 도구·한 일·배운 점 기록

3. **Git 반영** (사용자 요청 시)

   ```powershell
   git add .
   git commit -m "type: 변경 요약"
   .\scripts\push-to-fork.ps1
   .\scripts\open-upstream-pr.ps1 -Title "type: 변경 요약"
   ```

## 진행 기록 파일

| 규칙 | 내용 |
|------|------|
| 위치 | `cohorts/ai-agent/members/progress_<닉네임>.md` |
| 예시 | `progress_jeon.md`, `progress_jeonghj.md` |
| 없으면 | `.\scripts\init-member-progress.ps1 -Nickname <닉네임>` |

상세 갱신 절차: [.cursor/skills/member-progress/SKILL.md](.cursor/skills/member-progress/SKILL.md)

팀원마다 **에이전트 종류는 달라도 된다**. `progress_*.md`에 어떤 도구를 썼는지 적으면 충분하다.

## 빠른 참조

| 단계 | 명령 |
|------|------|
| 동기화 | `.\scripts\sync-upstream.ps1` |
| 브랜치 | `.\scripts\new-branch.ps1 -Type docs -Name 작업명` |
| 커밋 | `git commit -m "docs: 요약"` |
| 푸시 | `.\scripts\push-to-fork.ps1` |
| PR | `.\scripts\open-upstream-pr.ps1 -Title "docs: 요약"` |

## Cursor 사용자

Cursor에서는 [`.cursor/skills/kookmin-team-workflow/SKILL.md`](.cursor/skills/kookmin-team-workflow/SKILL.md)가 이 가이드를 자동으로 참조한다. 세션 시작 시 `.cursor/hooks/session-start.ps1` 훅이 동일한 체크리스트를 주입한다.

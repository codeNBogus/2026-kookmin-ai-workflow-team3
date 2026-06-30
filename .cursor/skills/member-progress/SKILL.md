---
name: member-progress
description: >-
  코호트 멤버 progress_<닉네임>.md 생성·갱신 워크플로. 작업 시작·완료 시 진행
  기록, init-member-progress.ps1로 신규 파일 생성, cohorts/ai-agent/members
  기록 요청 시 사용.
---

# 멤버 진행 기록 워크플로

팀원별 `cohorts/ai-agent/members/progress_<닉네임>.md`를 **작업마다** 갱신한다.

## 파일 규칙

| 항목 | 내용 |
|------|------|
| 경로 | `cohorts/ai-agent/members/progress_<닉네임>.md` |
| 예시 | `progress_jeon.md`, `progress_jeonghj.md`, `codeNBogus.md` |
| 템플릿 | [progress-template.md](../kookmin-team-workflow/progress-template.md) |

닉네임은 GitHub 아이디·코호트 닉네임 등 팀에서 통하는 짧은 이름을 쓴다.

## 최초 1회 — progress 파일 생성

```powershell
.\scripts\init-member-progress.ps1 -Nickname jeonghj
# 표시 이름을 다르게 쓰려면:
.\scripts\init-member-progress.ps1 -Nickname jeonghj -DisplayName "정현준"
```

생성 후 `작업 목표`를 본인 역할에 맞게 수정한다.

## 작업 세션마다 (에이전트 체크리스트)

### 시작

```
- [ ] upstream 동기화 (.\scripts\sync-upstream.ps1)
- [ ] 본인 progress_<닉네임>.md 읽기
- [ ] `현재 상태` 표에 `진행 중` 행 추가
- [ ] 작업 브랜치 생성 (.\scripts\new-branch.ps1)
```

`현재 상태` 표 형식:

```markdown
| 진행 중 | (작업 한 줄 설명) | (예정 결과물 경로) |
```

### 완료

```
- [ ] `최종 업데이트` 날짜 수정
- [ ] `현재 상태`: 진행 중 → 완료, 결과물 경로 기록
- [ ] `완료된 작업` 섹션에 ### N. 제목 + bullet + 결과물 링크 추가
- [ ] `다음 작업` 갱신
- [ ] (선택) 사용한 에이전트 기록
```

완료 섹션 예시는 [progress_jeon.md](../../cohorts/ai-agent/members/progress_jeon.md) 참고.

## Git 반영

progress 갱신은 **본인 작업 브랜치에 함께 커밋**한다.

```powershell
git add cohorts/ai-agent/members/progress_<닉네임>.md
git commit -m "docs: progress_<닉네임> 작업 기록 갱신"
```

다른 팀원 progress 파일은 수정하지 않는다.

## 에이전트가 닉네임을 모를 때

1. `cohorts/ai-agent/members/progress_*.md` 목록 확인
2. 사용자에게 닉네임 확인 또는 `init-member-progress.ps1` 실행 제안
3. origin URL의 GitHub 아이디를 힌트로만 사용 (파일명과 다를 수 있음)

## 관련 문서

- [AGENTS.md](../../AGENTS.md) — 전체 에이전트 공통 절차
- [kookmin-team-workflow](../kookmin-team-workflow/SKILL.md) — Git·Docs 작업 흐름
- [cohorts/ai-agent/members/README.md](../../cohorts/ai-agent/members/README.md)

# 코호트 멤버 기록

팀원별 작업·에이전트 사용 내역을 남기는 폴더입니다.

## 파일 규칙

| 파일 | 용도 |
|------|------|
| `progress_<닉네임>.md` | 작업 진행 기록 (필수) |
| 아래 템플릿 | 에이전트 사용 요약 (선택, 개인별로 복사해 사용) |

새 팀원은 아래 중 하나로 파일을 만든다.

```powershell
# 권장: 스크립트로 생성
.\scripts\init-member-progress.ps1 -Nickname <닉네임>

# 수동: 템플릿 복사
# .cursor/skills/kookmin-team-workflow/progress-template.md → progress_<닉네임>.md
```

참고 예시: [progress_jeon.md](progress_jeon.md), [progress_jeonghj.md](progress_jeonghj.md)

작업마다 갱신 절차는 [member-progress 스킬](../../../.cursor/skills/member-progress/SKILL.md)을 참고한다.

## 에이전트 사용 요약 템플릿

작업 세션마다 아래 형식으로 남길 수 있습니다. 에이전트 종류는 자유입니다.

## {사용자}
-

## 사용한 에이전트
-

## 에이전트가 한 일
-

## 배운 점
-

## 작업 절차

전체 흐름은 저장소 루트 [AGENTS.md](../../../AGENTS.md)를 따릅니다.

1. `scripts/sync-upstream.ps1`으로 동기화
2. `Docs/project.md`와 본인 `progress_*.md` 확인
3. 작업 후 `progress_*.md` 갱신

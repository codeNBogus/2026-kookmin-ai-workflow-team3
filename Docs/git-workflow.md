# Git 워크플로우 & 컨벤션

팀 3 저장소의 **브랜치 · 커밋 · PR 규칙**과 **로컬 → 포크(origin) → 업스트림(upstream)** 작업 절차입니다.  
모든 팀원이 동일한 규칙을 따릅니다.

## 저장소 구조

| 이름 | URL | 역할 |
|------|-----|------|
| **upstream** | https://github.com/nxtcloud-edu/2026-kookmin-ai-workflow-team3 | 공식 팀 저장소 (PR로만 기여) |
| **origin** | `https://github.com/<본인-GitHub-아이디>/2026-kookmin-ai-workflow-team3` | 본인 포크 (push 대상) |
| **local** | 로컬 작업 디렉터리 | 코드 작성·커밋 |

```
upstream (공식)  ←── PR ──  origin (포크)  ←── push ──  local (작업)
     │                                              │
     └──────────── fetch / merge (동기화) ──────────┘
```

> **upstream `main`에는 직접 push하지 않습니다.** 포크에 push한 뒤 Pull Request로 반영합니다.

---

## 팀 컨벤션

### 브랜치

| 브랜치 | 용도 | 직접 push |
|--------|------|-----------|
| `main` | 배포·공유 기준 브랜치 | ❌ (PR만) |
| `<type>/<작업-설명>` | 모든 작업 브랜치 | ✅ (본인 포크) |

**타입 (`type`)**

| type | 용도 | 예시 |
|------|------|------|
| `feature` | 기능·시나리오·콘텐츠 추가 | `feature/event-mexico-branch` |
| `docs` | 문서·가이드·조사 자료 | `docs/git-workflow` |
| `fix` | 오타·링크·버그 수정 | `fix/readme-typo` |
| `chore` | 스크립트·설정·정리 | `chore/sync-script` |
| `refactor` | 구조 개선 (동작 변경 없음) | `refactor/events-structure` |

**작업 설명 규칙**

- 영문 **kebab-case** 권장 (한글도 가능하나 URL 호환을 위해 영문 권장)
- 짧고 구체적으로: `feature/world-cup-czech-research` ✅ / `feature/work` ❌
- `main`에서 기능 작업 금지 — 항상 작업 브랜치를 만든다

```powershell
# 권장: 스크립트로 브랜치 생성 (동기화 + 컨벤션 이름)
.\scripts\new-branch.ps1 -Type docs -Name git-workflow

# 수동
git checkout main
.\scripts\sync-upstream.ps1
git checkout -b docs/git-workflow
```

---

### 커밋 메시지

[Conventional Commits](https://www.conventionalcommits.org/) 형식을 따릅니다.

```
<type>: <변경 내용 한 줄 요약>
```

| type | 용도 |
|------|------|
| `feat` | 새 기능·시나리오·콘텐츠 |
| `fix` | 버그·오류 수정 |
| `docs` | 문서만 변경 |
| `style` | 포맷·띄어쓰기 (내용 변경 없음) |
| `refactor` | 리팩터링 |
| `test` | 테스트 추가·수정 |
| `chore` | 빌드·스크립트·기타 잡무 |

**규칙**

- 제목은 **50자 이내**, 명령형으로 작성 (`추가함` ❌ → `추가` ✅)
- 한 커밋 = 한 가지 목적 (섞지 않기)
- 본문이 필요하면 제목 다음 빈 줄 후 작성

**예시**

```
docs: Git 워크플로우 및 팀 컨벤션 문서 추가
feat: 멕시코전 분기 시나리오 초안 작성
fix: events.md 링크 오타 수정
chore: upstream 동기화 스크립트 추가
```

```powershell
git add .
git commit -m "docs: Git 워크플로우 및 팀 컨벤션 문서 추가"
```

---

### Pull Request

**제목** — 커밋 메시지와 동일한 형식

```
docs: Git 워크플로우 및 팀 컨벤션 문서 추가
```

**본문** — PR 생성 시 `.github/pull_request_template.md` 템플릿을 채운다.

| 항목 | 규칙 |
|------|------|
| base | `nxtcloud-edu/2026-kookmin-ai-workflow-team3` → `main` |
| compare | 본인 포크의 작업 브랜치 |
| 리뷰 | **팀원 1명 이상** Approve 후 머지 |
| 머지 방식 | **Squash and merge** 권장 (히스토리 정리) |
| 크기 | 가능하면 작게 — 큰 PR은 쪼개기 |

**PR 제목·본문 예시**

```
제목: docs: 2026 체코전 조사 자료 추가

본문:
## 변경 요약
체코전 배경·일정·전술 포인트 조사 문서를 Docs에 추가했습니다.

## 변경 유형
- [x] docs

## 작업 배경
이벤트 시나리오 작성을 위한 사전 조사 자료가 필요합니다.

## 확인 방법
1. Docs/2026_월드컵_한국_체코전_정리.md 내용 확인
```

---

### 리뷰·머지 흐름

```
작성자: 브랜치 작업 → 포크 push → upstream PR 생성
리뷰어: 코드/문서 확인 → Comment 또는 Approve
작성자: (필요 시) 수정 push → 재리뷰
리뷰어/담당자: Squash and merge
작성자: sync-upstream → 로컬·포크 main 정리 → 작업 브랜치 삭제
```

**리뷰 시 확인할 것**

- 브랜치·커밋·PR 제목이 컨벤션을 따르는가
- 변경 범위가 PR 설명과 일치하는가
- 비밀키·개인정보·불필요한 파일이 없는가

---

## 1. 최초 1회 설정

```powershell
# 1) GitHub에서 upstream 저장소 Fork
#    https://github.com/nxtcloud-edu/2026-kookmin-ai-workflow-team3

# 2) 본인 포크 clone
git clone https://github.com/<본인-GitHub-아이디>/2026-kookmin-ai-workflow-team3.git
cd 2026-kookmin-ai-workflow-team3

# 3) upstream 원격 추가
git remote add upstream https://github.com/nxtcloud-edu/2026-kookmin-ai-workflow-team3.git

# 4) 확인
git remote -v
```

---

## 2. 작업 시작 — upstream 동기화

```powershell
git checkout main
.\scripts\sync-upstream.ps1
```

또는 수동:

```powershell
git fetch upstream
git merge upstream/main
```

---

## 3. 작업 브랜치에서 개발

```powershell
.\scripts\new-branch.ps1 -Type feature -Name event-czech-branch

# 파일 수정 후
git add .
git commit -m "feat: 체코전 분기 시나리오 초안 추가"
```

---

## 4. 포크(origin)에 push

```powershell
.\scripts\push-to-fork.ps1
```

---

## 5. upstream에 PR 생성

### GitHub 웹

1. 본인 포크 페이지 접속
2. **Compare & pull request**
3. base: `nxtcloud-edu/2026-kookmin-ai-workflow-team3` / `main`
4. compare: 본인 포크 / 작업 브랜치
5. 컨벤션에 맞는 제목 + 템플릿 작성 → **Create pull request**

### GitHub CLI

```powershell
.\scripts\open-upstream-pr.ps1 `
  -Title "docs: Git 워크플로우 및 팀 컨벤션 문서 추가" `
  -Body "변경 요약 및 확인 방법"
```

---

## 6. PR 머지 후 정리

```powershell
git checkout main
.\scripts\sync-upstream.ps1
git push origin main

git branch -d feature/작업-설명
git push origin --delete feature/작업-설명
```

---

## 빠른 참조

| 단계 | 명령 |
|------|------|
| 동기화 | `.\scripts\sync-upstream.ps1` |
| 브랜치 생성 | `.\scripts\new-branch.ps1 -Type docs -Name 작업명` |
| 커밋 | `git commit -m "type: 요약"` |
| 포크 push | `.\scripts\push-to-fork.ps1` |
| PR | `.\scripts\open-upstream-pr.ps1 -Title "type: 요약"` |

---

## 스크립트

| 스크립트 | 설명 |
|----------|------|
| `scripts/sync-upstream.ps1` | upstream fetch + main merge |
| `scripts/new-branch.ps1` | 동기화 후 컨벤션 브랜치 생성 |
| `scripts/push-to-fork.ps1` | 현재 브랜치를 origin에 push |
| `scripts/open-upstream-pr.ps1` | upstream PR 생성 (gh CLI) |

PowerShell 실행 정책 오류:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

---

## 주의사항

- upstream `main`에 직접 push 금지
- `main`에서 기능 작업 금지 — 작업 브랜치 사용
- `.env`, API 키, 개인정보 커밋 금지
- PR 없이 팀 저장소에 반영되지 않음 — 반드시 PR + 리뷰

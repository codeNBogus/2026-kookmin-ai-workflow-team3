---
name: react-vn-web
description: >-
  web/ React 미연시 클라이언트 구현. Vite·TypeScript·Zustand·Tailwind 화면·
  컴포넌트·게임 상태·이벤트 엔진 작업 시 사용. 게임 화면, UI, web/ 스캐폴드,
  EventScreen, EndingScreen, gameStore 수정 요청 시 사용.
---

# React 미연시 웹 클라이언트

`web/` 디렉터리의 **내가 홍명보라면** 게임 클라이언트를 다룬다.

## 스택 (변경 금지 — 사용자 요청 없이)

| 항목 | 선택 |
|------|------|
| 빌드 | Vite |
| UI | React + TypeScript |
| 상태 | Zustand (`web/src/store/gameStore.ts`) |
| 스타일 | Tailwind CSS v4 (`web/src/index.css` `@theme`) |
| 배포 | **아직 없음** — GitHub Pages·Vercel 설정 추가하지 않음 |

## 작업 시작 전 읽기

1. [Docs/events.md](../../Docs/events.md) — 수치·연출·엔딩 규칙
2. [image/STYLE_GUIDE.md](../../image/STYLE_GUIDE.md) — 색·폰트
3. [web/README.md](../../web/README.md) — 실행·구조
4. 콘텐츠 추가 시 [events-to-data](../events-to-data/SKILL.md) 스킬
5. 대사만 수정 시 [hongmyungbo-dialogue](../hongmyungbo-dialogue/SKILL.md) 스킬

## 디렉터리 구조

```text
web/src/
├── data/events.ts       # 이벤트 데이터 (런타임 소스)
├── game/types.ts        # GameEvent, Choice, EndingInfo
├── game/tiers.ts        # 엔딩 티어 (붕괴~고조)
├── store/gameStore.ts   # Zustand: phase, 수치, 분기
├── screens/             # TitleScreen, EventScreen, EndingScreen
└── components/          # BackgroundImage, NarrativeBox, ChoiceButtons
```

이미지: `@image/` alias → 저장소 루트 `image/` (`web/vite.config.ts`)

## 게임 UX 규칙 (events.md 준수)

| 시점 | UI |
|------|-----|
| 선택·진행 중 | **숫자 비공개**. `NarrativeBox`(variant `feedback`)에 (연출) 텍스트만 |
| 엔딩 | `EndingScreen`에서 수치 + 티어 + 성적 + 「제목」 |

- `publicSentiment` = 국민 민심, `teamMorale` = 선수단 분위기
- 티어: `game/tiers.ts`의 `getTier`, `formatStat` 사용

## phase 흐름

```text
title → event → feedback → event → … → ending → title
```

- `selectChoice` → effects 적용 → `feedback` 있으면 `phase: feedback`
- `dismissFeedback` → `pendingNext`로 이동
- `autoNext` 이벤트 → `advanceAuto` (선택지 없음)
- `next: '__title__'` → 타이틀 복귀

## 화면 추가·수정 시

- 새 화면은 `screens/`에, 재사용 UI는 `components/`
- Tailwind 색 토큰: `deep-navy`, `slate-blue`, `energy-red`, `turf-green`, `off-white`, `cool-gray`
- 폰트: Noto Sans KR (`web/index.html`)
- 범위 최소화 — 요청한 화면·이벤트만 수정

## 로컬 실행·검증

```powershell
cd web
npm install
npm run dev
```

빌드 확인: `npm run build` (배포는 하지 않음)

## Git·진행 기록

[kookmin-team-workflow](../kookmin-team-workflow/SKILL.md) 따름.

```powershell
.\scripts\new-branch.ps1 -Type feature -Name web-작업-설명
```

커밋·push·PR은 사용자 요청 시에만.

## 역할 분리

| 작업 | 스킬 |
|------|------|
| events.md 대사·시나리오 | hongmyungbo-dialogue |
| events.md → events.ts | events-to-data |
| 화면·상태·엔진 | **이 스킬** |

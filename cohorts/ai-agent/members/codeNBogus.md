# 작업 진행 기록 — codeNBogus

> 최종 업데이트: 2026년 6월 30일

## 작업 목표

- "내가 홍명보라면" 미연시 프로젝트의 이벤트 시나리오 작성
- 완료된 작업, 생성·수정한 파일을 한곳에서 관리한다.
- 이후 작업을 진행할 때 이 문서도 함께 갱신한다.

## 현재 상태

| 상태 | 작업 | 결과물 |
|---|---|---|
| 완료 | 프로젝트 문서 작성 | `Docs/project.md` |
| 완료 | 이벤트 1 (빵집 상황) 시나리오 작성 | `Docs/events.md` |
| 완료 | 이벤트 2 (기자회견) 시나리오 작성 | `Docs/events.md` |
| 완료 | 이벤트 3 (AFC 최종 예선) 결과 작성 | `Docs/events.md` |
| 완료 | 이벤트 6-1 (남아공전 전술회의) 시나리오 작성 | `Docs/events.md` |
| 완료 | 이벤트 6-2 (전반 하이드레이션) 시나리오 작성 | `Docs/events.md` |
| 완료 | 이벤트 6-3 (전반 이후 락커룸) 시나리오 작성 | `Docs/events.md` |
| 완료 | 이벤트 6-4-1/2/3 (후반전 분기) 시나리오 작성 | `Docs/events.md` |
| 완료 | 타이틀 화면 배경 이미지 및 제목 변경 | `web/src/screens/TitleScreen.tsx` |
| 완료 | 이벤트 3→4 전환 시 점수 현황(StatsScreen) 추가 | `web/src/screens/StatsScreen.tsx` |
| 완료 | 이벤트 가중치 밸런스 조정 (E1·E2·E6-1) | `web/src/data/events.ts`, `Docs/events.md` |
| 대기 중 | 이벤트 4·5·6-5 시나리오 작성 | `Docs/events.md` |

## 완료된 작업

### 1. 프로젝트 문서 작성

- 작업일: 2026년 6월 30일
- 프로젝트 개요, 목표, 주요 기능, 이벤트 흐름 구성
- `Docs/events.md` 생성 — 이벤트 1~6 템플릿 구성

결과물:
- [Docs/project.md](../../../Docs/project.md)
- [Docs/events.md](../../../Docs/events.md)

### 2. 이벤트 1 (빵집 상황) 시나리오 작성

- 작업일: 2026년 6월 30일
- 배경, 선택지 A/B 멘트, 결과 및 사진 경로 작성
- image/빵집.webp, image/제시마치.webp 추가

결과물:
- [Docs/events.md — 이벤트 1](../../../Docs/events.md)

### 3. 이벤트 2 (기자회견) 시나리오 작성

- 작업일: 2026년 6월 30일
- 배경, 선택지 A/B 멘트, 국민 민심 포인트 결과 작성
- image/선임기자회견.jpg 추가

결과물:
- [Docs/events.md — 이벤트 2](../../../Docs/events.md)

### 4. 이벤트 3 (AFC 최종 예선) 결과 작성

- 작업일: 2026년 6월 30일
- 2024~2025 AFC 3차 예선 실제 경기 결과표 작성
- 국민 민심 및 선수단 분위기 포인트 변화 포함
- image/AFC예선.jpg 추가

결과물:
- [Docs/events.md — 이벤트 3](../../../Docs/events.md)

### 5. 이벤트 6-1 (남아공전 전술회의) 시나리오 작성

- 작업일: 2026년 6월 30일
- 배경, 선택지 A/B/C 멘트, 결과 작성 (A: 무승부, B: 승리, C: 패배)
- 선수단 분위기 포인트 변화 포함
- image/싸워짤.webp 추가

결과물:
- [Docs/events.md — 이벤트 6-1](../../../Docs/events.md)

### 6. 이벤트 6-2 (전반 하이드레이션) 시나리오 작성

- 작업일: 2026년 6월 30일
- 배경, 선택지 A/B/C 멘트, 결과 작성
- A: 전술 설명, B: 카메라 의식 시늉, C: 기도

결과물:
- [Docs/events.md — 이벤트 6-2](../../../Docs/events.md)

### 7. 이벤트 6-3 (전반 이후 락커룸) 시나리오 작성

- 작업일: 2026년 6월 30일
- 배경, 선택지 A/B/C 멘트, 결과 작성
- A: 냉정한 전술 조정, B: 감정적 동기부여, C: 분노 폭발

결과물:
- [Docs/events.md — 이벤트 6-3](../../../Docs/events.md)

### 8. 타이틀 화면 배경·제목 변경

- 작업일: 2026년 6월 30일
- 배경 이미지: `image/국대감독이될래요.jpeg` 적용
- 제목: "엄마, 나는 커서 국가대표\n감독이 될래요!" 로 변경

결과물:
- [web/src/screens/TitleScreen.tsx](../../../web/src/screens/TitleScreen.tsx)

### 9. 이벤트 3→4 전환 시 점수 현황 화면 추가

- 작업일: 2026년 6월 30일
- StatsScreen 컴포넌트 신규 생성 — 국민 민심·선수단 분위기 수치와 티어 표시
- `GamePhase`에 `'stats'` 추가, `__show-stats__:` 패턴으로 화면 전환 처리
- event-3 autoNext: `__show-stats__:event-chapter-4` (스탯 → chapter → 이벤트 4)
- upstream 동기화 중 `chapter` 페이즈 추가 충돌 해결

결과물:
- [web/src/screens/StatsScreen.tsx](../../../web/src/screens/StatsScreen.tsx)
- [web/src/game/types.ts](../../../web/src/game/types.ts)
- [web/src/store/gameStore.ts](../../../web/src/store/gameStore.ts)
- [web/src/App.tsx](../../../web/src/App.tsx)

### 10. 이벤트 가중치 밸런스 조정

- 작업일: 2026년 6월 30일
- 긍정 엔딩(7-2, 7-3) 달성 불가 문제 분석 후 초기 패널티 완화
- E1-A: -100 → -60 / E2-A: -100 → -50 / E2-B: -50 → -20
- E6-1-B: +50 → +30 / E6-1-C: -100 → -60

결과물:
- [web/src/data/events.ts](../../../web/src/data/events.ts)
- [Docs/events.md](../../../Docs/events.md)


## 다음 작업

- 이벤트 4 (체코전) 시나리오 작성
- 이벤트 5 (멕시코전) 시나리오 작성
- 이벤트 6-4 시나리오 작성

## 사용한 에이전트

- Claude Code (claude-sonnet-4-6)

## 배운 점

-

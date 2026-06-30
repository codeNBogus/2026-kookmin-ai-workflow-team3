/** Docs/events.md 「엔딩 목록 (한눈에 보기)」 표 기준 */
export type EndingCatalogEntry = {
  eventId: string
  eventLabel: string
  code: string
  title: string
  grade: string
  condition: string
  summary: string
}

export const ENDING_CATALOG: EndingCatalogEntry[] = [
  {
    eventId: 'event-7-1',
    eventLabel: '7-1',
    code: 'E0',
    title: '제시마치',
    grade: '32강 (패러디)',
    condition: '이벤트 1-B',
    summary: '감독직 거절 → 제시마치 선임, 어쨌든 32강',
  },
  {
    eventId: 'event-7-2',
    eventLabel: '7-2',
    code: 'E1-L',
    title: '전설의 귀환',
    grade: '16강 이상',
    condition: '32강 진출 · 사기 ≥ +140 · 민심 ≥ −55',
    summary: '대성공·히든, 2014의 그늘 완전 탈출',
  },
  {
    eventId: 'event-7-3',
    eventLabel: '7-3',
    code: 'E2-H',
    title: '명예 회복',
    grade: '32강',
    condition: '32강 진출 · 민심 ≥ −120 · 사기 ≥ +40',
    summary: '2014 수모 씻고 환호받는 감독',
  },
  {
    eventId: 'event-7-4',
    eventLabel: '7-4',
    code: 'E2-I',
    title: '운 좋은 32강',
    grade: '32강',
    condition: '32강 진출 · 7-2·7-3·7-5 미충족',
    summary: '32강은 갔지만 논란은 그대로',
  },
  {
    eventId: 'event-7-5',
    eventLabel: '7-5',
    code: 'E2-T',
    title: '선수 덕분',
    grade: '32강',
    condition: '32강 진출 · 민심 ≤ −150 · 사기 ≥ +50',
    summary: '감독은 비판, 팀은 살림',
  },
  {
    eventId: 'event-7-6',
    eventLabel: '7-6',
    code: 'E3-R',
    title: 'Fight의 대가',
    grade: '조별리그 탈락',
    condition: '탈락 · 사기 ≤ −80 · 6-1-C 선택',
    summary: 'Fight 한마디가 모든 걸 망침',
  },
  {
    eventId: 'event-7-7',
    eventLabel: '7-7',
    code: 'E3-S',
    title: '배신당한 감독',
    grade: '조별리그 탈락',
    condition: '탈락 · 민심 ≥ −140 · 사기 ≤ −30',
    summary: '여론은 괜찮았는데 팀이 무너짐',
  },
  {
    eventId: 'event-7-8',
    eventLabel: '7-8',
    code: 'E3-M',
    title: '책임 회피의 끝',
    grade: '조별리그 탈락',
    condition: '탈락 · 7-6·7-7 미충족',
    summary: '사퇴 기자회견까지 추가 논란',
  },
]

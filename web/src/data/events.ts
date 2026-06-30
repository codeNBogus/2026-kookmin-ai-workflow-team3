import type { GameEvent } from '@/game/types'
import bakeryImg from '@image/빵집.webp'
import jesimachiImg from '@image/제시마치.webp'
import pressConferenceImg from '@image/선임기자회견.jpg'
import afcQualifiersImg from '@image/AFC예선.jpg'
import stadiumImg from '@image/경기장.jpg'
import guadalajaraImg from '@image/과달라하라 경기장.webp'
import kimMistakeImg from '@image/김승규실책.jpg'
import mexicoConcedeImg from '@image/멕시코실점후.jpg'
import mexicoAfterImg from '@image/멕시코경기후.jpg'
import fightImg from '@image/싸워짤.webp'
import hydrationImg from '@image/남아공하이드레이션_전반.jpg'
import lockerRoomImg from '@image/이게팀이야.jpg'
import saGoalImg from '@image/남아공선제골.webp'
import tightMatchImg from '@image/팽팽한경기.jpg'
import koreaGoalImg from '@image/한국선제골.jpg'

export const events: Record<string, GameEvent> = {
  'event-chapter-2': {
    id: 'event-chapter-2',
    type: 'chapter',
    title: '감독 선임 기자회견',
    background: pressConferenceImg,
    chapter: {
      label: '기자회견',
      subtitle: '홍명보 감독 선임 직후',
    },
    text: '논란 속 선임. 기자들의 질문이 쏟아지는 자리다.',
    autoNext: 'event-2',
  },
  'event-chapter-3': {
    id: 'event-chapter-3',
    type: 'chapter',
    title: '월드컵 최종 예선',
    background: afcQualifiersImg,
    chapter: {
      label: 'AFC 3차 예선',
      subtitle: '2024~2025 · B조',
    },
    text: '이라크·요르단·오만·쿠웨이트·팔레스타인과의 본선 티켓 싸움.',
    autoNext: 'event-3',
  },
  'event-chapter-4': {
    id: 'event-chapter-4',
    type: 'chapter',
    title: 'VS 체코',
    background: stadiumImg,
    chapter: {
      label: '조별리그',
      subtitle: '2026 북중미 월드컵 · 1차전',
    },
    text: '본선 첫 경기. 역전승의 시작이 될 수도, 논란의 시작이 될 수도 있다.',
    autoNext: 'event-4-1',
  },
  'event-chapter-5': {
    id: 'event-chapter-5',
    type: 'chapter',
    title: 'VS 멕시코',
    background: guadalajaraImg,
    chapter: {
      label: '조별리그',
      subtitle: '2026 북중미 월드컵 · 2차전',
    },
    text: '승자는 32강 진출을 조기에 확정한다. 홈 관중 앞의 멕시코가 기다린다.',
    autoNext: 'event-5-1',
  },
  'event-chapter-6': {
    id: 'event-chapter-6',
    type: 'chapter',
    title: 'VS 남아공',
    background: fightImg,
    chapter: {
      label: '조별리그',
      subtitle: '2026 북중미 월드컵 · 3차전',
    },
    text: '1승 1패. 무승부만 해도 자력으로 32강이 가능한 마지막 조별리그 경기.',
    autoNext: 'event-6-1',
  },
  'event-1': {
    id: 'event-1',
    title: '빵집 상황',
    background: bakeryImg,
    text: '임생이형으로부터 연락이 왔다. 빵집에서 만나 대한민국 국가대표팀 감독직 제안을 받는 자리다.',
    choices: [
      {
        id: 'A',
        label:
          '2014년 브라질 월드컵의 수모... 나의 명예를 다시 세우겠어...',
        next: 'event-chapter-2',
        effects: { publicSentiment: -60 },
        feedback: '여론이 벌써부터 시끄럽다.',
      },
      {
        id: 'B',
        label:
          '형, 빵집까지 불러내셔서 이런 말씀 하시면 어떡합니까. 저 그냥 빵이나 먹고 갈게요.',
        next: 'event-7-1',
      },
    ],
  },
  'event-2': {
    id: 'event-2',
    title: '기자회견',
    background: pressConferenceImg,
    text: '홍명보 감독 선임 직후 기자회견장. 논란 속 선임에 기자들의 날카로운 질문이 쏟아진다. "감독님, 이번 선임 과정에 대해 어떻게 생각하십니까?"',
    choices: [
      {
        id: 'A',
        label: '저는 저를 버렸습니다. 한국축구를 위해 마지막으로 봉사하겠습니다.',
        next: 'event-chapter-3',
        effects: { publicSentiment: -50 },
        feedback: '기자들이 고개를 저으며 메모한다.',
      },
      {
        id: 'B',
        label:
          '국민 여러분의 우려, 충분히 이해하고 있습니다. 논란 속에 이 자리에 선 만큼, 말보다 결과로 보여드리겠습니다. 끝까지 믿어봐 주십시오.',
        next: 'event-chapter-3',
        effects: { publicSentiment: -20 },
        feedback: '여론은 여전히 차갑지만, 일부 기자는 고개를 끄덕인다.',
      },
    ],
  },
  'event-3': {
    id: 'event-3',
    title: '월드컵 최종 예선',
    background: afcQualifiersImg,
    text: '2024~2025년 AFC 3차 최종 예선. B조에서 이라크·요르단·오만·쿠웨이트·팔레스타인과 경기를 치른다. 조 2위로 2026 북중미 월드컵 본선 진출을 확정했다.',
    autoNext: '__show-stats__:event-chapter-4',
    autoEffects: { publicSentiment: -40, teamMorale: 0 },
    autoFeedback:
      '경기력 논란은 끊이지 않았지만, 어찌됐든 월드컵 본선 티켓은 땄다.',
  },
  'event-4-1': {
    id: 'event-4-1',
    title: '손흥민 교체',
    background: stadiumImg,
    text: '체코전 후반 20분, 0-1 뒤진 상황. 손흥민은 슈팅은 많았지만 골이 없고, 오현규 교체 카드가 올라왔다. 경기 전 취재진 갈등 여파로 주장과 감독 사이가 미묘하게 어색한 상태다.',
    choices: [
      {
        id: 'A',
        label:
          '손흥민, 수고 많았다. 체코가 네 뒷공간만 조이고 있으니… 준비해 둔 대로 오현규 넣겠다. 끝까지 포기하지 말자.',
        next: 'event-chapter-5',
        effects: { publicSentiment: 20, teamMorale: 25 },
        feedback:
          '오현규 투입 직후 흐름이 바뀐다. 황인범 동점, 오현규 역전. 김승규 선방으로 2-1 승리. 라커룸에 웃음이 터진다.',
      },
      {
        id: 'B',
        label:
          '손흥민, 그 장면에서 조금 더 침착했어야 했는데… 그 부분은 아쉽다. 오늘은 여기까지다. 나와.',
        next: 'event-chapter-5',
        effects: { publicSentiment: -35, teamMorale: -15 },
        feedback:
          '2-1 역전승이지만 손흥민은 물병도 받지 않았다. 다음 날 "주장 교체 직후 선수 탓" 기사가 올라온다.',
      },
    ],
  },
  'event-5-1': {
    id: 'event-5-1',
    title: 'VS 멕시코 — 전술회의',
    background: guadalajaraImg,
    text: '체코와 멕시코가 나란히 1차전에서 승리해, 이 경기의 승자는 32강 진출을 조기에 확정한다. 멕시코는 홈 관중의 응원을 받지만 주전 중앙수비수 세사르 몬테스가 징계로 결장한다.',
    choices: [
      {
        id: 'A',
        label:
          '체코전과 같은 3-4-3으로 간다. 황인범을 중심으로 압박을 풀고, 손흥민과 이강인이 뒷공간을 노려.',
        next: 'event-5-2',
        effects: { teamMorale: 10 },
        feedback: '점유율을 확보하며 전반을 0-0으로 마쳤다.',
      },
      {
        id: 'B',
        label:
          '몬테스가 빠진 중앙 수비는 호흡이 완벽하지 않을 거야. 전방 압박을 강하게 걸어서 실수를 끌어내자.',
        next: 'event-5-2',
        effects: { teamMorale: 20 },
        feedback: '강한 압박으로 기회를 만들었지만 체력 소모가 크다. 전반 0-0.',
      },
    ],
  },
  'event-5-2': {
    id: 'event-5-2',
    title: '후반 5분 선제골 허용',
    background: kimMistakeImg,
    text: '후반 5분, 김승규가 수비수 이기혁과 충돌하면서 공을 놓쳤고 루이스 로모가 이를 밀어 넣었다. 0-1로 뒤진 상황에서 공격진 교체를 준비한다.',
    choices: [
      {
        id: 'A',
        label:
          '손흥민과 이재성은 여기까지다. 황희찬과 오현규를 바로 투입해서 공격 속도를 높인다.',
        next: 'event-5-3',
        effects: { teamMorale: -10, publicSentiment: -20 },
        feedback: '주장 교체로 벤치와 관중석 사이 공기가 차갑다.',
      },
      {
        id: 'B',
        label:
          '손흥민은 남긴다. 백승호를 빼고 오현규를 넣어서 주장과 함께 동점골을 노린다.',
        next: 'event-5-3',
        effects: { teamMorale: 10, publicSentiment: 10 },
        feedback: '손흥민과 오현규가 함께 공격을 이끈다.',
      },
    ],
  },
  'event-5-3': {
    id: 'event-5-3',
    title: '경기 막판 승부수',
    background: mexicoConcedeImg,
    text: '후반 30분을 넘겼지만 대한민국은 여전히 0-1로 뒤져 있다. 멕시코는 수비 라인을 내리고 골문을 지키기 시작했다.',
    choices: [
      {
        id: 'A',
        label:
          '조규성까지 넣는다. 측면에서 계속 크로스를 올리고, 세컨드 볼까지 전부 밀어붙여.',
        next: 'event-chapter-6',
        effects: { teamMorale: -30, publicSentiment: -30 },
        feedback:
          '조규성과 양현준이 연속 슈팅을 만들지만 랑헬 선방에 막혔다. 0-1 패배.',
      },
      {
        id: 'B',
        label:
          '숫자만 늘리지 마. 대형을 유지하고 이강인의 패스로 수비 사이를 침착하게 공략한다.',
        next: 'event-chapter-6',
        effects: { teamMorale: -10, publicSentiment: -10 },
        feedback:
          '동점골을 노렸지만 뚫지 못하고 0-1 패배. 무리한 공격 없이 조직력은 유지했다.',
      },
    ],
  },
  'event-6-1': {
    id: 'event-6-1',
    title: '남아공전 전술회의',
    background: fightImg,
    text: '체코전 승, 멕시코전 패. 1승 1패로 맞이하는 조별리그 최종전. 무승부만 하더라도 자력으로 32강 진출이 가능하다. 킥오프 직전, 감독으로서 최후의 전술 선택을 내려야 한다.',
    choices: [
      {
        id: 'A',
        label:
          '3-4-3 블록으로 중앙 봉쇄. 측면 내주더라도 박스 안은 절대 내주지 마. 세트피스 하나면 충분해.',
        next: 'event-6-2',
        effects: { teamMorale: -10 },
        feedback: '안정적인 경기 운영을 택했다.',
      },
      {
        id: 'B',
        label:
          '멕시코전 패배가 아직 머릿속에 남아있을 거야. 오늘 이겨야 32강 가서도 자신 있게 뛸 수 있어. 이 경기가 우리 분위기 바꾸는 분기점이야.',
        next: 'event-6-2',
        effects: { teamMorale: 30 },
        feedback: '선수들의 눈빛이 달라졌다.',
      },
      {
        id: 'C',
        label:
          'Fight. 단어알지? 싸워. 난 오늘 그걸(싸우는 모습을) 여러 번 볼 거야.',
        next: 'event-6-2',
        effects: { teamMorale: -60 },
        feedback: '라커룸이 순식간에 차갑게 식었다.',
        setFlag: 'event-6-1-C',
      },
    ],
  },
  'event-6-2': {
    id: 'event-6-2',
    title: '하이드레이션 브레이크',
    background: hydrationImg,
    text: '전반 30분, 하이드레이션 브레이크. 선수들이 모여들고 카메라가 감독을 향한다. 지금 이 순간, 무슨 말을 하느냐가 후반을 결정한다.',
    choices: [
      {
        id: 'A',
        label:
          '들어봐. 지금 남아공 수비가 4-4-2 블록인데, 오른쪽 풀백이 계속 높이 올라오고 있어. 거기 공간 파고들어야 해. 희찬아, 네가 안으로 들어오면서 현규가 그 뒷공간 찌르는 거야. 이해했지?',
        next: 'event-6-3',
        effects: { teamMorale: 30, publicSentiment: 20 },
        feedback: '선수들이 고개를 끄덕이며 전술을 받아들인다.',
      },
      {
        id: 'B',
        label:
          '자, 집중해. 수비 라인... 올리고. 공격은... 빠르게. 알겠지? 할 수 있어.',
        next: 'event-6-3',
        effects: { teamMorale: -20, publicSentiment: -10 },
        feedback: '선수들 눈빛이 흔들린다.',
      },
      {
        id: 'C',
        label:
          '제발... 한 골만... 하나님, 부처님, 알라신, 단군 할아버지...',
        next: 'event-6-3',
        effects: { teamMorale: -50, publicSentiment: -50 },
        feedback: '인터넷 밈이 탄생했다.',
      },
    ],
  },
  'event-6-3': {
    id: 'event-6-3',
    title: '전반 종료 — 락커룸',
    background: lockerRoomImg,
    text: '전반전 종료. 팀은 락커룸으로 돌아왔다. 스코어는 0-0. 선수들의 눈이 감독을 향한다. 후반 45분이 이 팀의 운명을 가른다.',
    choices: [
      {
        id: 'A',
        label:
          '전반에 우리 측면이 너무 열렸어. 후반엔 4-3-3으로 바꾼다. 황인범 앞으로 올리고, 손흥민 오른쪽으로. 수비 라인 한 계단 내려. 다들 이해했지? 할 수 있어.',
        next: '__branch-6-4__',
        effects: { teamMorale: 20, publicSentiment: 10 },
        feedback: '선수단 전술 정비가 이뤄졌다.',
      },
      {
        id: 'B',
        label:
          '여기까지 왔어. 우리가 여기까지 온 거야. 지금 이 순간, 대한민국 국민 5천만 명이 우릴 보고 있어. 후반 45분만... 딱 45분만 싸워줘.',
        next: '__branch-6-4__',
        effects: { teamMorale: 40, publicSentiment: 20 },
        feedback: '선수단 사기가 충전됐다.',
      },
      {
        id: 'C',
        label:
          '이게 팀이야? 지금 뭐 하는 거야?! 전반 내내 패스가 다 어디로 가는 거야! 집중 안 할 거면 나가!',
        next: '__branch-6-4__',
        effects: { teamMorale: -30, publicSentiment: -20 },
        feedback: '락커룸이 침묵에 잠겼다.',
      },
    ],
  },
  'event-6-4-1': {
    id: 'event-6-4-1',
    title: '후반전 — 남아공 1:0',
    background: saGoalImg,
    text: '후반 20분, 남아공 코너킥에서 헤더 실점. 스코어 0-1. 32강이 멀어지고 있다. 벤치에서 감독의 선택이 필요하다.',
    choices: [
      {
        id: 'A',
        label:
          '즉시 투톱으로 전환. 이재성, 조규성 동시 투입, 4-4-2로 바꾼다. 전방 압박 강하게 가.',
        next: '__resolve-ending__',
        effects: { teamMorale: 20, publicSentiment: 10 },
        feedback: '공격적 교체로 분위기가 전환됐다.',
      },
      {
        id: 'B',
        label:
          '지더라도 한 점 차이면 3등으로 진출할 수 있어. 박진섭 넣고 추가 실점은 없도록 하자.',
        next: '__resolve-ending__',
        effects: { teamMorale: 10, publicSentiment: 5 },
        feedback: '냉정한 판단으로 수비를 정비했다.',
      },
      {
        id: 'C',
        label: '하... 이 새끼들 때문에 또 나의 명예가...',
        next: '__resolve-ending__',
        effects: { teamMorale: -40, publicSentiment: -30 },
        feedback: '감독의 중얼거림에 선수들이 멍해졌다.',
      },
    ],
  },
  'event-6-4-2': {
    id: 'event-6-4-2',
    title: '후반전 — 0:0',
    background: tightMatchImg,
    text: '후반 20분, 0-0. 무승부면 32강 진출 확정. 공격 가느냐, 수비로 잠그느냐. 감독의 판단이 필요하다.',
    choices: [
      {
        id: 'A',
        label:
          '이대로 잠근다. 김진규 추가 투입. 실점만 안 하면 우리가 올라간다.',
        next: '__resolve-ending__',
        effects: { teamMorale: 10, publicSentiment: 10 },
        feedback: '안정적 수비로 무승부를 지켰다.',
      },
      {
        id: 'B',
        label:
          '무승부로 만족하지 마. 4백으로 변경하고 한범이가 투톱으로 올라가. 일단 앞으로 공을 뿌리면서 생각해.',
        next: '__resolve-ending__',
        effects: { teamMorale: 30, publicSentiment: 20 },
        feedback: '공격적으로 운영하며 32강 티켓을 확보했다.',
      },
      {
        id: 'C',
        label: '일단... 지켜보자. 선수들이 알아서 잘 하겠지...',
        next: '__resolve-ending__',
        effects: { teamMorale: -20, publicSentiment: -20 },
        feedback: '방임적 태도에 선수들이 흔들렸다.',
      },
    ],
  },
  'event-6-4-3': {
    id: 'event-6-4-3',
    title: '후반전 — 한국 1:0',
    background: koreaGoalImg,
    text: '후반 20분, 손흥민의 왼발 슈팅으로 선제골. 스코어 1-0. 이대로 지키면 32강이다. 하지만 남아공도 공격을 퍼붓기 시작했다.',
    choices: [
      {
        id: 'A',
        label: '수비 라인 내려. 공간 내주지 마. 골 지키는 게 우선이야.',
        next: '__resolve-ending__',
        effects: { teamMorale: 10, publicSentiment: 10 },
        feedback: '안정적 수비로 1-0 승리를 지켰다.',
      },
      {
        id: 'B',
        label:
          '한 골 더 넣자. 지금 저들 멘탈 흔들렸어. 이 기세 몰아가야 해.',
        next: '__resolve-ending__',
        effects: { teamMorale: 30, publicSentiment: 20 },
        feedback: '추가골 기회를 만들며 32강을 확정했다.',
      },
      {
        id: 'C',
        label: '좋아, 좋아! 이거야! 다들 파이팅!',
        next: '__resolve-ending__',
        effects: { teamMorale: -10, publicSentiment: -5 },
        feedback: '전술 지시 없이 손만 뻗었다. 집중력이 흐트러졌다.',
      },
    ],
  },
  'event-7-1': {
    id: 'event-7-1',
    title: '제시마치',
    background: jesimachiImg,
    text: '빵집에서 돌아선 뒤, 대한민국 대표팀은 제시마치 감독 체제로 월드컵을 치른다.',
    type: 'ending',
    ending: {
      code: 'E0',
      title: '제시마치',
      grade: '32강 진출 (패러디)',
      epilogue: '…그래도 16강— 아니, 32강은 갔다.',
    },
  },
  'event-7-2': {
    id: 'event-7-2',
    title: '전설의 귀환',
    background: koreaGoalImg,
    text: '조별리그를 넘어 토너먼트에서도 팀이 들썩인다. 여론은 홍명보 감독을 다시 부른 선택을 후회하지 않는다고 말한다.',
    type: 'ending',
    ending: {
      code: 'E1-L',
      title: '전설의 귀환',
      grade: '16강 이상',
      epilogue: '2014년의 그늘을 완전히 벗어났다.',
    },
  },
  'event-7-3': {
    id: 'event-7-3',
    title: '명예 회복',
    background: pressConferenceImg,
    text: '조별리그를 통과한 뒤, 기자회견장 분위기가 달라졌다. "말보다 결과"라던 약속이 드디어 믿음으로 바뀌었다.',
    type: 'ending',
    ending: {
      code: 'E2-H',
      title: '명예 회복',
      grade: '32강 진출',
      epilogue: '2014의 수모를 씻고 환호받는 감독.',
    },
  },
  'event-7-4': {
    id: 'event-7-4',
    title: '운 좋은 32강',
    background: stadiumImg,
    text: '32강 티켓은 챙겼지만, 논란과 비판은 여전하다. "일단 갔으니 됐다"는 말과 "근본은 안 바뀌었다"는 말이 동시에 올라온다.',
    type: 'ending',
    ending: {
      code: 'E2-I',
      title: '운 좋은 32강',
      grade: '32강 진출',
      epilogue: '32강은 갔지만, 여론의 온도는 그대로.',
    },
  },
  'event-7-5': {
    id: 'event-7-5',
    title: '선수 덕분',
    background: mexicoAfterImg,
    text: '결과만 보면 통과. 하지만 인터넷과 기자회견은 감독이 아니라 선수들 덕분이라고 말한다.',
    type: 'ending',
    ending: {
      code: 'E2-T',
      title: '선수 덕분',
      grade: '32강 진출',
      epilogue: '감독은 비판, 팀은 살림.',
    },
  },
  'event-7-6': {
    id: 'event-7-6',
    title: 'Fight의 대가',
    background: fightImg,
    text: '"Fight" 한마디가 라커룸을 갈라놓았다. 남아공전 결과까지 흐름이 무너지고, 조별리그 탈락으로 이어진다.',
    type: 'ending',
    ending: {
      code: 'E3-R',
      title: 'Fight의 대가',
      grade: '조별리그 탈락',
      epilogue: '한 단어가 모든 걸 망쳤다.',
    },
  },
  'event-7-7': {
    id: 'event-7-7',
    title: '배신당한 감독',
    background: lockerRoomImg,
    text: '여론은 감독 편이었지만, 선수단은 무너졌다. 탈락 직후 "감독 말은 맞았는데 팀이 따라주지 않았다"는 분석이 나온다.',
    type: 'ending',
    ending: {
      code: 'E3-S',
      title: '배신당한 감독',
      grade: '조별리그 탈락',
      epilogue: '여론은 괜찮았는데, 팀이 무너짐.',
    },
  },
  'event-7-8': {
    id: 'event-7-8',
    title: '책임 회피의 끝',
    background: pressConferenceImg,
    text: '조별리그 탈락. 사퇴 기자회견에서 특정 선수를 거론하며 "그 부분은 아쉽다"고 말한다. 여론은 마지막까지도 식지 않는다.',
    type: 'ending',
    ending: {
      code: 'E3-M',
      title: '책임 회피의 끝',
      grade: '조별리그 탈락',
      epilogue: '사퇴 기자회견이 또 하나의 논란이 됨.',
    },
  },
}

export function getEvent(id: string): GameEvent {
  const event = events[id]
  if (!event) {
    throw new Error(`Unknown event: ${id}`)
  }
  return event
}

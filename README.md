# 여드름 고민 상담소

여드름 관련 질문과 답변을 제공하는 간단한 웹 서비스입니다.

## 기능

- 20개의 자주 묻는 여드름 관련 질문
- 클릭하면 바로 아래에 답변이 펼쳐지는 아코디언 UI
- 반응형 디자인 (모바일/태블릿 지원)

## 로컬 서버 실행 방법

### 방법 1: Python 사용 (가장 간단)
```bash
cd /Users/ryan/CodeRepository/my-pimple
python3 -m http.server 8080
```

### 방법 2: npm 사용 (자동 새로고침 지원)
```bash
cd /Users/ryan/CodeRepository/my-pimple
npm install
npm start
```

### 방법 3: npx 사용 (설치 없이 바로 실행)
```bash
cd /Users/ryan/CodeRepository/my-pimple
npx live-server --port=8080
```

## 접속 URL

서버 실행 후 브라우저에서 다음 주소로 접속:

**http://localhost:8080**

## 파일 구조

```
my-pimple/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일 시트
├── script.js       # JavaScript 로직
├── data.js         # Q&A 데이터
├── package.json    # npm 설정 파일
└── README.md       # 프로젝트 설명서
```

## 브라우저 호환성

- Chrome (권장)
- Firefox
- Safari
- Edge

## 라이선스

MIT
# 본 원격저장소 사용법

## node.js 설치를 하시고 vscode에서 작업하는 것을 추천한다.

> - Cntr + Shift + ` : 터미널 열기
> - npm i : package.json 설치
> - npm run dev : 실행 명령어 ("script" 참조)

![화면 캡처 2021-06-17 191745](https://user-images.githubusercontent.com/53801395/122378199-b4cd4300-cfa0-11eb-8bba-c3292d5af458.jpg)

**Project is running at http://loaclhost:8080/** 링크를 [ctrl + Click]하면 해당 웹페이지로 브라우저를 띄운다.

# 에러 사항

- (2021.##.##) DetailPage에서 새로고침(F5) 시, title을 찾지 못하여 에러가 나는 문제.
- (2021.##.##) menuBar를 늘렸다가 width:844px 미만으로 내려가면 메뉴 모음으로 바뀐 상태에서 width: 855px으로 늘리면 menuBar가 사라지는 문제.
- (2021.07.18) 모바일 뷰의 경우 로그인, 회원 가입 페이지가 맞지 않는 문제.

# 수정 사항

- 2021.06.xx Na [ Main Page 생성 및 작업 ]
- 2021.06.19 Tommy [ SCSS 추가 및 CSS 추가 작업 및 기타 수정 ]
- 2021.06.25 Na [ DetailPage 생성 및 라우터 분배, 검색창 추가 및 Cards.jsx 코드 수정]
- 2021.06.26,29 Tommy [ MenuBar 수정 및 (테스트)로고 삽입(클릭시 메인 화면 이동), SearchBox 수정]
- 20201.07.04 Na [ QuestionPage, ResultPage, data/questionData 생성 및 data/data 수정(detail_summary, key 속성 추가)]
- 2021.07.05 Tommy [ QuestionPage Animation 수정]
- 2021.07.17 Na [loginPage 및 라우터 설정]
- 2021.07.18 Tommy [joinPage 및 메뉴 라우터 연결]
- 2021.07.24 Na [팝업 창 및 업로드 뷰 부분 완성]
- 2021.07.25 Tommy [SearchBar 오류 수정 및 메뉴 SCSS 수정]
- 2021.07.30 Na [redux 적용 및 페이지 분단]
- 2021.07.31 Tommy [ShareButton 추가 (url 접근 시, 현재 입장이 불가능한 현상 있음.)]
- 2021.08.07 Na [시나리오업로드페이지 부분완성, 심리테스트 상세, 퀴즈, 결과페이지 디자인 일부 수정(앞으로 더 수정해나갈 것이다)]
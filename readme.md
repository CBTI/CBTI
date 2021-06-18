### 본 원격저장소 사용법

##### node.js 설치를 하시고 vscode에서 작업하는 것을 추천한다.

![화면 캡처 2021-06-17 190621](https://user-images.githubusercontent.com/53801395/122376423-1ab8cb00-cf9f-11eb-9050-7b8b5e7adf76.jpg)

폴더 구조는 다음과 같다. 일단 이 원격저장소를 pull을 해서 자신의 로컬저장소에 저장한 뒤 원격저장소에 있지 않은 dist, node_modules 폴더와 package-lock.json, package.json은 개인이 셋팅해야한다.

+ 먼저 자신의 터미널을 켜서 CBTI 폴더로 들어와 npm init 명령어 실행한다
    + 그러면 이것저것 입력하라는 문구가 나올텐데 그냥 엔터 막 두들기면 된다.
    + 그럼 package.json 파일이 생성될 것이다
  
+ 그 다음 필요한 모듈을 설치할 차례이다.
설치 순서는 상관없지만 뒤죽박죽으로 설치하면 헷갈릴 것이다. 각각의 npm명령어를 입력해 필요한 모듈들을 설치한다.
npm i react react-dom --save -> npm i -D webpack webpack-cli -> 
npm i @babel/core babel-loader -> npm i -D @babel/preset-env -> 
npm i -D @babel/preset-react ->
npm i -D @babel/plugin-proposal-class-properties ->
npm i -D react-refresh ->
npm i -D @pmmmwh/react-refresh-webpack-plugin -> 
npm i -D webpack-dev-server ->
npm i react-router-dom ->  npm i -D style-loader css-loader mini-css-extract-plugin -> npm i antd -> npm i @ant-design/icons

+ 설치가 다 끝났으면 package.json에 들어가서 "scripts" 안에다 "dev": "webpack serve --env development" 를 사진처럼 입력한다.  
  
![화면 캡처 2021-06-17 191618](https://user-images.githubusercontent.com/53801395/122377949-7d5e9680-cfa0-11eb-865b-00b364ee3ef5.jpg)

+ 그 다음 터미널에다 npx webpack 명령어를 실행하면 dist폴더와 함께 그 안에 app.js파일이 생성될 것이다..
그 다음 npm run dev 명령어를 실행하면 터미널에
![화면 캡처 2021-06-17 191745](https://user-images.githubusercontent.com/53801395/122378199-b4cd4300-cfa0-11eb-8bba-c3292d5af458.jpg)
+ 이렇게 Project is running at http://loaclhost:8080/으로 나올텐데 이때
 localhost:8080 ctrl를 누른 상태로 이 파란색 글씨들을 클릭해준다.

 + 그리고 몇십초 기다리면 결과물이 나올 것이다.
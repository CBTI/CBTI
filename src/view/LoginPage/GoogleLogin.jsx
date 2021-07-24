import React,{ useState, useRef, useEffect} from 'react'
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const GoogleLogin = () => {
    const googleLoginBtn = useRef(null);
    const [token, setToken] = useState("");
  
    useEffect(() => {
      googleSDK();
    }, []);
  
  
  //SDK 초기 설정 및 내 API초기화
   const googleSDK = () => {
      window.googleSDKLoaded = () => {
        console.log(window.gapi);
        window.gapi.load("auth2", () => {
          const auth2 = window.gapi.auth2.init({
            client_id:
              "852740094461-jq8rtermnsl1708l8oqll6g7ntc51r0b.apps.googleusercontent.com",
            scope: "profile email",
          });
          //버튼 클릭시 사용자 정보 불러오기
           auth2.attachClickHandler(
            googleLoginBtn.current,
            {},
            (googleUser) => {
              const profile = googleUser.getBasicProfile();
              console.log(profile);
              console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
              setToken(googleUser.getAuthResponse().id_token);
              console.log(`ID: ${profile.getId()}`);
              console.log(`Name: ${profile.getName()}`);
              console.log(`Image URL: ${profile.getImageUrl()}`);
              console.log(`Email: ${profile.getEmail()}`);
            },
            (error) => {
              alert(JSON.stringify(error, undefined, 2));
            }
          );
        });
      };
     //구글 SDK 불러오기
         (function (d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "google-jssdk");
    };
    
     return (
    //   <button id="gSignInWrapper">
    <Button  ref={googleLoginBtn} type="primary" size="large" icon={<GoogleOutlined />} style={{background:'#DF4A32', border:'none'}}>
        Google로 가입하기
      {/* </button> */}
      </Button>
    );
  }


export default GoogleLogin
// 2차 프로젝트 - React Hook으로 구글 소셜 로그인 구현하기 : https://velog.io/@yoju/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-React-Hook%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EA%B8%80-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-1
import React from 'react'
import FacebookLogin from 'react-facebook-login'
// import { FaFacebookSquare } from 'react-icons/fa';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const FacebookButton = () => {

    const responseFacebook = (response) => {
        const { id, email } = response; //페이스북 응답객체에서 id와 email을 할당한 후 
        oAuthLoginHandler(Number(id), email);  // props로 내려준 oAuthLoginHandler라는 함수에 인자로 넘겨준다.
      };
    const componentClicked = () => {
        console.log("sdf");
    }

    return (
        <FacebookLogin
            appId = "142259158039400"
            authLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}/>
    )
}
export default FacebookButton
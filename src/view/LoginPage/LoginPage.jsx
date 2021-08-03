import React, { useState } from "react";
import "./LoginPage.scss";
import {
  LoginOutlined,
  GoogleOutlined,
  FacebookFilled,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Modal, Checkbox } from "antd";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const LoginForm = (props) => {
  const [isFindIDModalVisible, setIsFindIDModalVisible] = useState(false);
  const [isFindPSModalVisible, setIsFindPSModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showFindIDModal = () => {
    setIsFindIDModalVisible(true);
  };

  // 사용자가 이메일을 입력 후 아이디를 찾는 함수
  const findIDhandleOk = () => {
    // setIsFindIDModalVisible(false);
  };

  const findIDhandleCancel = () => {
    setIsFindIDModalVisible(false);
  };
  const showFindPSModal = () => {
    setIsFindPSModalVisible(true);
  };
  // 사용자가 이메일과 아이디를 입력 후 비밀번호를 찾는 함수
  const findPsHandleOk = () => {
    // setIsFindPSModalVisible(false);
    const login_userId = document.querySelector("#login_userId");
    const login_password = document.querySelector("#login_password");
    console.log(login_userId, login_password);

    //test 로그인 테스트
    if (login_userId === "abc" && login_password === "abc") {
    }
  };

  const findPsHandleCancel = () => {
    setIsFindPSModalVisible(false);
  };

  return (
    <div className="login__container">
      <div className="login__item">
        <Link to="/">
          <HomeOutlined className="login__item__homebutton" />
        </Link>
        <Form
          name="login"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="User ID"
            name="userId"
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div>
              <a style={{ marginRight: "10px" }} onClick={showFindIDModal}>
                아이디 찾기
              </a>
              <span style={{ marginRight: "10px" }}>/</span>
              <a onClick={showFindPSModal}>비밀번호 찾기</a>
            </div>
            {/* <Checkbox>Remember me</Checkbox> */}
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
              display: "table",
            }}
          >
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <div className="login__item__ButtonSpace">
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<LoginOutlined />}
                >
                  로그인하기
                </Button>
                {/* <Link to="/GoogleLogin">
                  <Button type="primary" size="large" icon={<GoogleOutlined />} style={{background:'#DF4A32', border:'none'}}>
                    Google로 가입하기
                  </Button>
                </Link> */}
                <GoogleLogin />
              </div>
              <div>
                <Link to="/join">
                  <Button
                    type="primary"
                    size="large"
                    icon={<UserAddOutlined />}
                    style={{
                      background: "rgba(34, 177, 76, 0.8)",
                      border: "none",
                    }}
                  >
                    회원가입
                  </Button>
                </Link>
                <Button
                  type="primary"
                  size="large"
                  icon={<FacebookFilled />}
                  style={{ background: "#5875B1", border: "none" }}
                >
                  facebook로 가입하기
                </Button>
              </div>
            </div>
          </Form.Item>

          {/* 아이디 찾기 팝업 */}

          <Modal
            title="아이디 찾기"
            visible={isFindIDModalVisible}
            onOk={findIDhandleOk}
            onCancel={findIDhandleCancel}
            footer={[]} // 빈 값이어야 하단에 ok, cancel버튼이 안나온다
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="userEmail"
                rules={[
                  {
                    required: true,
                    message: "이메일를 입력해주세요!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Button
                onClick={findIDhandleOk}
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                OK
              </Button>
              <Button onClick={findIDhandleCancel}>Cancel</Button>
            </Form>
          </Modal>

          {/* 비밀번호 찾기 팝업 */}
          <Modal
            title="비밀번호 찾기"
            visible={isFindPSModalVisible}
            onOk={findPsHandleOk}
            onCancel={findPsHandleCancel}
            footer={[]} // 빈 값이어야 하단에 ok, cancel버튼이 안나온다
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="userEmail"
                rules={[
                  {
                    required: true,
                    message: "이메일를 입력해주세요!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="User ID"
                name="userID"
                rules={[
                  {
                    required: true,
                    message: "아이디를 입력해주세요!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Button
                onClick={findPsHandleOk}
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                OK
              </Button>
              <Button onClick={findPsHandleCancel}>Cancel</Button>
            </Form>
          </Modal>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;

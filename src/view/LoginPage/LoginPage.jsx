import React from 'react';
import './LoginPage.scss'
import { LoginOutlined, GoogleOutlined, FacebookFilled, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login__container">
      <div className="login__item">
        <Link to="/">
          <HomeOutlined className="login__item__homebutton"/>
        </Link>
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: '아이디를 입력해주세요!',
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
                message: '비밀번호를 입력해주세요!',
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
                <a>아이디/비밀번호 찾기</a>
              </div>
            {/* <Checkbox>Remember me</Checkbox> */}
          </Form.Item>
        
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          style={{
            display: 'table'
          }}
          >
            <div className="login__item__ButtonSpace">
              <div>
                <Button type="primary" htmlType="submit" size="large" icon={<LoginOutlined />}>
                  로그인하기
                </Button>
                <Button type="primary" size="large" icon={<GoogleOutlined />} style={{background:'#DF4A32', border:'none'}}>
                  Google로 가입하기
                </Button>
              </div>
              <div>
                <Link to='/join'>
                  <Button type="primary" size="large" icon={<UserAddOutlined />} style={{background:'rgba(34, 177, 76, 0.8)', border:'none'}}>
                    회원가입
                  </Button>
                </Link>
                <Button type="primary" size="large" icon={<FacebookFilled />} style={{background: '#5875B1', border:'none'}}>
                  facebook로 가입하기
                </Button>
              </div>
            </div>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};
export default LoginForm

import React from 'react'
import './JoinPage.scss'
import { LoginOutlined, GoogleOutlined, FacebookFilled, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const JoinPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <div className="join__container">
          <div className="join__item">
            <Link to="/">
              <HomeOutlined className="join__item__homebutton"/>
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
                label="아이디"
                name="userId"
                rules={[
                  {
                    required: true,
                    message: '아이디를 입력해주세요!',
                  },
                ]}
                >
                <Input placeholder="아이디를 입력해주세요."/>
              </Form.Item>
    
              <Form.Item
                label="패스워드"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '비밀번호를 입력해주세요!',
                  },
                ]}
                >
                <Input.Password placeholder="비밀번호를 입력해주세요."/>
              </Form.Item>

              <Form.Item
                label="패스워드 확인"
                name="rePassword"
                rules={[
                  {
                    required: true,
                    message: '비밀번호를 입력해주세요!',
                  },
                ]}
                >
                <Input.Password placeholder="비밀번호를 재입력해주세요."/>
              </Form.Item>

              <Form.Item
                label="닉네임"
                name="useName"
                rules={[
                  {
                    required: true,
                    message: '닉네임을 입력해주세요!',
                  },
                ]}
                >
                <Input placeholder="닉네임을 재입력해주세요."/>
              </Form.Item>

              <Form.Item
                label="전화번호"
                name="phone"
                >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                >
                <Input />
              </Form.Item>

              <Form.Item
                label="주소"
                name="address"
                >
                <Input />
              </Form.Item>

              <Form.Item 
                wrapperCol={{ offset: 8, span: 16 }}
                className="join__btnGroup"
                >
                <Button type="primary" htmlType="submit">
                    완료
                </Button>
                <Link to="/">
                    <Button htmlType="/">
                        취소
                    </Button>
                </Link>
            </Form.Item>
          </Form>
          </div>
        </div>
      );
}

export default JoinPage

import React from 'react'
import './Page.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actionCreators as uploadAction } from '../../../redux/modules/upload';

const Page2 = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(uploadAction.submitTitle(values.title, values.tag));

    };
    const BackPage = () => {
        dispatch(uploadAction.backPage());
    }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

      const JoinSubmit = (e) => {
    }
    return (
        <div className="container">
            <div className="item Page2__item">
                <h1>시나리오 지문/선택지 추가</h1>
                <Form
                name="basic"
                labelCol={{
                    span:4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="지문"
                    name="question"
                    rules={[
                    {
                        required: true,
                        message: '지문을 입력해주세요!',
                    },
                    ]}
                    >
                    <Input placeholder= "지문을 입력해주세요."/>
                </Form.Item>
        
                <Form.Item
                    label="선택지"
                    name="select"
                    rules={[
                        {
                            required: true,
                            message: '지문을 입력해주세요!',
                        },
                    ]}
                    >
                    <Input placeholder="선택지를 입력해주세요."/>
                </Form.Item>


                <Form.Item 
                    wrapperCol={{ span: 16 }}
                    className="join__btnGroup"
                    >
                    <Button type="primary" onClick={BackPage} icon={<RightCircleOutlined />} size="large">이전으로</Button>
                    <Button type="primary" onClick={JoinSubmit} htmlType="submit" icon={<RightCircleOutlined />} size="large">다음으로</Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}

export default Page2
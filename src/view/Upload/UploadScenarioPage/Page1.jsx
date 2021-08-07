import React, {useRef} from 'react'
import './Page.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as uploadAction } from '../../../redux/modules/upload';

import BackButton from '../../../Component/BackButton';

const Page1 = ({ history }) => {
    const dispatch = useDispatch();
    const input = useRef('');
    const scenario = useSelector(state => state.upload.scenario)
    // console.log(input.current.state.value);
    console.log(input);

    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(uploadAction.submitTitle(values.title, values.tag));
    };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

      const JoinSubmit = (e) => {
    }
    return (
        <div className="container">
            <div className="item Page1__item">
                <h1>시나리오 제목/태그 추가</h1>
                <Form
                name="basic"
                labelCol={{
                    span:3,
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
                    label="제목"
                    name="title"
                    rules={[
                    {
                        required: true,
                        message: '제목을 입력해주세요!',
                    },
                    ]}
                    >
                    <Input ref={input} defaultValue={scenario.title} placeholder="제목을 입력해주세요."/>
                </Form.Item>
        
                <Form.Item
                    label="태그"
                    name="tag"
                    >
                    <Input defaultValue={scenario.tag} placeholder="태그를 입력해주세요."/>
                </Form.Item>


                <Form.Item 
                    wrapperCol={{ span: 16 }}
                    className="join__btnGroup"
                    >
                    <BackButton history={history}>이전으로</BackButton>
                    <Button type="primary" onClick={JoinSubmit} htmlType="submit" icon={<RightCircleOutlined />} size="large">다음으로</Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}

export default Page1

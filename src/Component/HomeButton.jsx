import React from 'react'
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const BackButton = (props) => {
    return <Button type="primary" icon={<HomeOutlined /> } onClick={() => props.history.push("/")} size="large">홈으로가기</Button>
}
export default BackButton
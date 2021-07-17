import React from 'react'
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BackButton = () => {
    return <Button icon={<UpOutlined />} style={toBottom} onClick={() => window.scrollTo({top:0, left:0, behavior:"smooth"})} size="large"/>
}
const toBottom = {
        width: '42px',
        height: '42px',
        background: '#A770EF',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        zIndex: '9', 
}
export default BackButton
import React from 'react';
import { Link } from 'react-router-dom';

import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <Link to="/login">
      <SubMenu key="sub2" icon={<LoginOutlined />} title="로그인" />
      </Link>
      <Link to="/join">
      <SubMenu key="sub3" icon={<UserAddOutlined />} title="회원가입" />
      </Link>
    </Menu>
  );
}
export default RightMenu;
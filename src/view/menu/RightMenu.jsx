import React from 'react';
import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <SubMenu key="sub2" icon={<LoginOutlined />} title="로그인">
      </SubMenu>
      <SubMenu key="sub3" icon={<UserAddOutlined />} title="회원가입">
      </SubMenu>
    </Menu>
  );
}
export default RightMenu;
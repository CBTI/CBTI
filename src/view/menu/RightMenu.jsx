import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  CloudUploadOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;

const RightMenu = () => {
  const [isLoginUser, setIsLoginUser] = useState(true);
  return (
    <Menu mode="horizontal">
      {isLoginUser ? (
        <>
          <Link to="/upload">
            <SubMenu key="sub2" icon={<CloudUploadOutlined />} title="업로드" />
          </Link>
          <Link to="/join">
            <SubMenu key="sub3" icon={<UserOutlined />} title="마이페이지" />
          </Link>
          <Link to="/join">
            <SubMenu key="sub3" icon={<LogoutOutlined />} title="로그아웃" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <SubMenu key="sub2" icon={<LoginOutlined />} title="로그인" />
          </Link>
          <Link to="/join">
            <SubMenu key="sub3" icon={<UserAddOutlined />} title="회원가입" />
          </Link>
        </>
      )}
    </Menu>
  );
};
export default RightMenu;

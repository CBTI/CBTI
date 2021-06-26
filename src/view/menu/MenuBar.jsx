import React from 'react';
import { Link } from 'react-router-dom';
import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu, Row, Col } from 'antd'; // added by Tommy (2021.06.26) 메뉴 정렬
const { SubMenu } = Menu;


const MenuBar = () => {
    return(
      <>
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', background:"white"}}>
            <Menu 
              mode={'horizontal'}
              style={{float:'right'}}> 
              <SubMenu key="sub2" icon={<LoginOutlined />} title="로그인">
              </SubMenu>
              <SubMenu key="sub3" icon={<UserAddOutlined />} title="회원가입">
              </SubMenu>
            </Menu>
        </nav>
      </>
    )
}


export default MenuBar;
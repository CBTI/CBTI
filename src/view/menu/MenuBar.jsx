import React from 'react';
import { Link } from 'react-router-dom';
import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu, Drawer, Button } from 'antd'; // added by Tommy (2021.06.26) 메뉴 정렬
import RightMenu from './RightMenu'
import './MenuBar.css'

const { SubMenu } = Menu;
const { useState, useRef } = React;

// 테스트 이미지 <img src={require('./img/cbti.jpg')} alt="alt" title='title'/>
const MenuBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  const onClickLogo = () => {
    // go to MainPage
    window.location.href = window.location.protocol + "//" + window.location.host;
  };


    return(
      <>
        <nav className="menuBar">
          <div className="logo" onClick={onClickLogo}>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
                <RightMenu />
            </div>

            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn"></span>
            </Button>

            <Drawer
              title="메뉴"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
               <Menu mode="inline">
                <Menu.Item  key="sub2" icon={<LoginOutlined />} title="로그인">
                  <a href='#'>로그인</a>
                </Menu.Item>
                <Menu.Item  key="sub3" icon={<UserAddOutlined />} title="회원가입">
                <a href='#'>회원가입</a>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </nav>
      </>
    )
}


export default MenuBar;
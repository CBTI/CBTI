import React from 'react';
import { Link } from 'react-router-dom';
import { LoginOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;


const MenuBar = () => {
    return(
      <>
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', background:"white"}}>
          {/* 왼쪽 메뉴 : 메인 페이지, ...*/}
          <Menu
            mode={'horizontal'}
            style={{float:'left'}}>
               
            <div className="left_menu">
              <Link to="/">
                <SubMenu key="sub1" icon={<HomeOutlined />} title="메인 페이지">
                </SubMenu>
              </Link>
            </div>
          </Menu>
          {/* 오른쪽 메뉴 : 로그인/로그아웃, 회원가입, 업로드 */}
          <Menu
            mode={'horizontal'}
            style={{float:'right'}}> 
          
            <div className="right_menu">
              <SubMenu key="sub2" icon={<LoginOutlined />} title="로그인">
              </SubMenu>
            </div>
            <div className="right_menu">
              <SubMenu key="sub3" icon={<UserAddOutlined />} title="회원가입">
              </SubMenu>
            </div>
          </Menu>
        </nav>
      </>
    )
}


export default MenuBar;
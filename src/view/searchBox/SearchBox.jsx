import React, { useState } from 'react';
import './SearchBox.scss'
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {
  
  const [InputData, setInputData] = useState('');
  const [IsButtonClicked, setIsButtonClicked] = useState(false);

  const onChangeInput = (e) => {
    setInputData(e.target.value);
  }

  const onClickSearch = () => {
    if(IsButtonClicked) {
      setIsButtonClicked(false);
      const btn = document.querySelector('#to-top');
      btn.style.transition = "transform 300ms ease";
      btn.style.transform = "translateX(0px)";
    } else {
      setIsButtonClicked(true);
      const btn = document.querySelector('#to-top');
      btn.style.transition = "transform 300ms ease";
      if(window.innerWidth > 400) {
        btn.style.transform = "translateX(-360px)";
      } else {
        btn.style.transform = "translateX(-220px)";
      }
      
    }
  }

  const onEnter = (e) => {
    e.preventDefault();
    // 여기에 엔터키를 입력 시 검색어에 해당된 심리테스트를 불러오는 로직을 구현해야한다 
  }
  return (
    <>
    <form onSubmit={onEnter}>
      <Button id="to-top" onClick={() => onClickSearch()}>
        <SearchOutlined />
      </Button>
      {IsButtonClicked &&
        <div>
          <Input placeholder="찾고싶은 것을 검색하세요" onChange={onChangeInput} id="search__Input"  value={InputData}/>
        </div>
      }
    </form>
    </>
  )
}

export default SearchBox;
//npx node-sass ./src/view/searchBox/SearchBox.css ./src/view/searchBox/SearchBox.scss

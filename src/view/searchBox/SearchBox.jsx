<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./SearchBox.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
=======
import React, { useState } from 'react';
import './SearchBox.scss'
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
>>>>>>> c14dfb5d10edbc606a552e3ccc29b21517cced56

const SearchBox = () => {
  const [InputData, setInputData] = useState("");
  const [IsButtonClicked, setIsButtonClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // esc 버튼을 사용하기 위한 연결
    document.addEventListener("keydown", handleKeyPress, false);
  });

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    // esc 버튼
    if (e.key === "Escape" && IsButtonClicked === true) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (IsButtonClicked) {
      setIsButtonClicked(false);
      const btn = document.querySelector("#to-top");
      const input = document.querySelector("#search__Input");
      btn.style.transition = "transform 300ms ease";
      btn.style.transform = "translateX(0px)";
      input.classList.remove = "large";
      input.classList.remove = "small";
    } else {
      setIsButtonClicked(true);
      const btn = document.querySelector("#to-top");
      btn.style.transition = "transform 300ms ease";
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 400) {
        btn.style.transform = "translateX(-360px)";
      } else {
        btn.style.transform = "translateX(-220px)";
      }
    }
  };

  const onEnter = (e) => {
    e.preventDefault();
    // 여기에 엔터키를 입력 시 검색어에 해당된 심리테스트를 불러오는 로직을 구현해야한다
  };
  return (
    <>
      <form onSubmit={onEnter}>
        <Button id="to-top" onClick={() => onClickSearch()}>
          <SearchOutlined />
        </Button>
        {IsButtonClicked && windowWidth > 400 && (
          <div>
            <Input
              placeholder="찾고싶은 것을 검색하세요"
              onChange={onChangeInput}
              onKeyPress={handleKeyPress}
              id="search__Input"
              className="large"
              value={InputData}
            />
          </div>
        )}
        {IsButtonClicked && windowWidth <= 400 && (
          <div>
            <Input
              placeholder="찾고싶은 것을 검색하세요"
              onChange={onChangeInput}
              onKeyPress={handleKeyPress}
              id="search__Input"
              className="small"
              value={InputData}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBox;
//npx node-sass ./src/view/searchBox/SearchBox.css ./src/view/searchBox/SearchBox.scss

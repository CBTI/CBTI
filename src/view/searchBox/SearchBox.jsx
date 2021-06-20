import React from 'react';
import './SearchBox.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {
  return (
    <Button id="to-top">
      <SearchOutlined />
    </Button>
  )
}

export default SearchBox;
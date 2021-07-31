import React from "react";
import { Button } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const BackButton = (props) => {
  return (
    <Button
      type="primary"
      icon={<LeftCircleOutlined />}
      onClick={() => props.history.goBack()}
      size="large"
    >
      뒤로가기
    </Button>
  );
};

export default BackButton;

import React, { useEffect } from "react";
import { Button } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

let point = sessionStorage.getItem("point");
const clipboard = new ClipboardJS(".shareButton");

export default function ShareButton() {
  useEffect(() => {
    document
      .querySelector(".shareButton")
      .setAttribute("data-clipboard-text", window.location.href);
  });

  const copyClipboard = () => {
    clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      alert("url이 복사되었습니다!");
    });

    clipboard.on("error", function (e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  };

  return (
    <>
      <Button
        className="shareButton"
        type="primary"
        onClick={copyClipboard}
        size="large"
      >
        공유하기
      </Button>
    </>
  );
}

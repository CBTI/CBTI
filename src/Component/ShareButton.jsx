import React from "react";
export default function ShareButton() {
  const clipboard = () => {
    new ClipboardJS(".kakao");
    clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      alert("url이 복사되었습니다!");
    });
  };

  return (
    <>
      <button onClick={clipboard}>공유하기</button>
    </>
  );
}

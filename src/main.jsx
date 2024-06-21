import Popup from "@/popup";
import React from "react";
import ReactDOM from "react-dom/client";
// 在popup页面调试content script，仅用于开发环境，build前记得要注释掉。

ReactDOM.createRoot(document.getElementById("root")).render(<Popup />);

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastProvider } from "@artifact/ui-lib/toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ToastProvider duration={1000}>
    <App />
  </ToastProvider>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import RootContext from "./context/index";
import "./index.css";
import "antd/dist/antd.css";
import Root from "./root";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootContext>
        <Root />
      </RootContext>
    </QueryClientProvider>
  </React.StrictMode>
);

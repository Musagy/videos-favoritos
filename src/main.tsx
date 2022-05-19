import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UploadPostsProvider } from "./context/uploadPosts";
import { PostIdModifyProvider } from "./context/postIdModify";
import { PostIdDeleteProvider } from "./context/postIdDelete";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UploadPostsProvider>
      <PostIdModifyProvider>
        <PostIdDeleteProvider>
          <App />
        </PostIdDeleteProvider>
      </PostIdModifyProvider>
    </UploadPostsProvider>
  </React.StrictMode>
);

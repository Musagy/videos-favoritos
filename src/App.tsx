import { useContext, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Form from "./components/form";
import List from "./components/list";
import ModalDelete from "./components/modalDelete";
import { PostIdDeleteContext } from "./context/postIdDelete";
import { PostIdModifyContext } from "./context/postIdModify";

function App() {
  const idModify = useContext(PostIdModifyContext).postId;
  const idDelete = useContext(PostIdDeleteContext).postId;

  return (
    <div className="app-ctn">
      {/* <div>hola</div> */}
      {idDelete && (
        <ModalDelete/>
      )}
      <Form />
      <div className={"bg-curves " + (idModify ? "modify-mode": undefined)} />
      <List />
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { PostIdDeleteContext } from "../context/postIdDelete";
import { UploadPostsContext } from "../context/uploadPosts";
import "./modalDelete.css";

const ModalDelete = () => {
  const API_URL = "https://musagy-node-ts.herokuapp.com/videos/";
  const { setPostId, postId } = useContext(PostIdDeleteContext);
  const { setUpload, upload } = useContext(UploadPostsContext);

  const handleDelete = () => {
    fetch(API_URL + postId, {
      method: "DELETE",
    })
      .then(() => {
        console.log("eliminado");
        setPostId("");
        setUpload(upload + 1);
        console.log(upload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="modal-bg" onClick={() => setPostId("")}>
      <div className="modal">
        <h1>¿Deseas eliminar este video?</h1>
        <div className="btn-sec__modal">
          <button className="btn-post post-m__modal">
            <span>Cancelar</span>
          </button>
          <button className="btn-post post-d__modal" onClick={handleDelete}>
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;

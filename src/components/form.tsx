import { useContext, useEffect, useState } from "react";
import { PostIdModifyContext } from "../context/postIdModify";
import { UploadPostsContext } from "../context/uploadPosts";
import "./form.css";

const postDefault = {
  title: "",
  description: "",
  url: "",
};
const Form = () => {
  const { setUpload, upload } = useContext(UploadPostsContext);
  const { setPostId, postId } = useContext(PostIdModifyContext);

  const [newPost, setNewPost] = useState(postDefault);
  const API_URL = "https://musagy-node-ts.herokuapp.com/videos/";
  useEffect(() => {
    if (postId) {
      fetch(API_URL + postId)
        .then((response) => response.json())
        .then((data) => setNewPost(data));
    }
  }, [postId]);
  const handleInputChange = (event: {
    target: { name: string; value: any };
  }) => {
    setNewPost({
      ...newPost,
      [event.target.name.split("-")[0]]: event.target.value,
    });
  };

  const onSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!postId) {
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newPost),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUpload(upload + 1);
          setNewPost(postDefault)
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(API_URL + postId, {
        method: "PUT",
        body: JSON.stringify(newPost),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUpload(upload + 1);
          setPostId("");
          setNewPost(postDefault)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  };

  return (
    <section id="form-ctn" className={postId ? "modify-mode" : undefined}>
      <form onSubmit={onSubmitHandler} >
        {!postId ? <h1>Publica un video</h1> : <h1>Edita tu video</h1>}
        <div>
          <label id="title-video">
            <span>Titulo para el video</span>
            <input
              onChange={handleInputChange}
              type="text"
              name="title-video"
              value={newPost.title}
            />
          </label>

          <label id="description-video">
            <span>Descripción para el video</span>
            <textarea
              onChange={handleInputChange}
              name="description-video"
              value={newPost.description}
            />
          </label>

          <label id="url-video">
            <span>Url de video</span>
            <input
              onChange={handleInputChange}
              type="text"
              name="url-video"
              value={newPost.url}
            />
          </label>
        </div>

        {!postId ? (
          <button>Postear</button>
        ) : (
          <>
            <button>Editar</button>
            <button
              style={{
                filter: "hue-rotate(120deg)",
              }}
              onClick={() => {setPostId(""); setNewPost(postDefault)}}
            >
              No editar
            </button>
          </>
        )}
      </form>
    </section>
  );
};

export default Form;

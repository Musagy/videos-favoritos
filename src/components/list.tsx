import { useContext, useEffect, useState } from "react";
import { UploadPostsContext } from "../context/uploadPosts";
import "./list.css";
import Post from "./post";
import { PostInterface } from "./types";

const API_URL = "https://musagy-node-ts.herokuapp.com/videos";

const List = () => {
  const { upload } = useContext(UploadPostsContext);
  console.log("refresh");
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(
    function () {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    },
    [upload]
  );

  return (
    <section id="list-ctn">
      <div id="list">
        {posts.map((post, i) => (
          <Post post={post} key={i}/>
        ))}
      </div>
    </section>
  );
};

export default List;

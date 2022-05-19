import { useState, useContext, useEffect } from "react";
import { useEmbedContent } from "../hooks/useEmbedContent";
import { PostInterface, VideoContInterface } from "./types";
import { PostIdModifyContext } from "../context/postIdModify";
import { PostIdDeleteContext } from "../context/postIdDelete";

type Props = {
  post: PostInterface;
};
const Post = ({ post }: Props) => {
  const [videoContent, setVideoContent] = useState<VideoContInterface>({
    platform: "",
    content: "",
  });
  const setIdModify = useContext(PostIdModifyContext).setPostId;
  const setIdDelete = useContext(PostIdDeleteContext).setPostId;
  const contentFetch = async () => {
    const response = await useEmbedContent(post.url);
    setVideoContent(response);
  };
  useEffect(() => {
    contentFetch();
  }, []);
  return (
    <article>
      <h1>{post.title}</h1>
      <div className="btn-sec">
        {["editar", "eliminar"].map((b, i) => (
          <button key={i}
            onClick={() => {
              if(b === "editar"){
                setIdModify(post._id);
                console.log(post._id);
              } else {
                setIdDelete(post._id);
                console.log(post._id);
              }
            }}
            className={"btn-post " + (b === "editar" ? "post-m" : "post-d")}
          >
            <span>{b}</span>
          </button>
        ))}
      </div>
      <p>{post.description}</p>
      <div
        className={
          videoContent.platform === "YouTube"
            ? "video-container-youtube"
            : "video-container-tiktok"
        }
        style={{
          outline: "2px solid white",
          borderRadius: "10px",
        }}
      >
        {videoContent.platform === "YouTube" ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoContent.content}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <iframe
            src={`https://www.tiktok.com/embed/${videoContent.content}`}
            allowFullScreen
            scrolling="no"
            allow="encrypted-media;"
          ></iframe>
        )}
      </div>
    </article>
  );
};

export default Post;

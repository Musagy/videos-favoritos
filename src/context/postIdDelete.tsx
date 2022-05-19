import React, { createContext, useState } from "react";
interface PostIdDeleteInterface {
  postId: string;
  setPostId: React.Dispatch<React.SetStateAction<string>>;
}

export const PostIdDeleteContext = createContext<PostIdDeleteInterface>({
  postId: "",
  setPostId: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const PostIdDeleteProvider = ({ children }: Props) => {
  const [postId, setPostId] = useState("");
  return (
    <PostIdDeleteContext.Provider value={{ postId, setPostId }}>
      {children}
    </PostIdDeleteContext.Provider>
  );
};
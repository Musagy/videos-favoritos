import React, { createContext, useState } from "react";
interface PostIdModifyInterface {
  postId: string;
  setPostId: React.Dispatch<React.SetStateAction<string>>;
}

export const PostIdModifyContext = createContext<PostIdModifyInterface>({
  postId: "",
  setPostId: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const PostIdModifyProvider = ({ children }: Props) => {
  const [postId, setPostId] = useState("");
  return (
    <PostIdModifyContext.Provider value={{ postId, setPostId }}>
      {children}
    </PostIdModifyContext.Provider>
  );
};
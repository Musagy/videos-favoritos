import React, { createContext, useState } from "react";
interface UploadPostsInterface {
  upload: number;
  setUpload: React.Dispatch<React.SetStateAction<number>>;
}

export const UploadPostsContext = createContext<UploadPostsInterface>({
  upload: 0,
  setUpload: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const UploadPostsProvider = ({ children }: Props) => {
  const [upload, setUpload] = useState(0);
  return (
    <UploadPostsContext.Provider value={{ upload, setUpload }}>
      {children}
    </UploadPostsContext.Provider>
  );
};
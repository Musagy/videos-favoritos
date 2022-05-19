import {VideoContInterface } from "../components/types";

// interface VideoContInterface {
//   platform: string;
//   content: string;
// }


export async function useEmbedContent(url:string): Promise<VideoContInterface> {
  const urlPaths = url.split("/")
  const webUrl = urlPaths[0].includes("http") ? urlPaths[2] : urlPaths[0]
  console.log(webUrl)
  const tiktok = "www.tiktok.com"
  const YouTube = (webUrl == "www.youtube.com" || webUrl == "youtu.be") && webUrl
  switch(webUrl){
    case tiktok:
      const indexInitial = url.indexOf("/video/") + 7;
      const idTiktok = url.slice(indexInitial, indexInitial+19) 
      return {
        platform : "tiktok",
        content: idTiktok
      }
    case YouTube:
      const videoIdPath = urlPaths.findIndex(path => path == webUrl) + (webUrl === "youtu.be" ? 1 : 2)
      return {
        platform : "YouTube",
        content: urlPaths[videoIdPath]
      }  
    default:
      return {
        platform : "",
        content: url
      }
  }
}
import { Box } from "@mui/material";
import ReactImageGallery from "react-image-gallery"
import  "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/300/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/300/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/300/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

export const Gallery = () => {
  return (
   <Box sx={{}}>
   <ReactImageGallery   items={images}
   showPlayButton={false}
   showNav={false}
   showBullets={true}
   showFullscreenButton={false}
   autoPlay={true}
   slideInterval={4000}
   />
   </Box>
  )
}

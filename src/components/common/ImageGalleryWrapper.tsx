import { FC } from "react";
import type { ReactImageGalleryProps } from "react-image-gallery";

// Nhập kiểu mặc định và ép lại đúng định dạng JSX hợp lệ
const ImageGallery = require("react-image-gallery").default as FC<ReactImageGalleryProps>;

export default ImageGallery;

import { Image as ImageGS } from "@/components/ui/image";
import { SvgUri } from "react-native-svg";
import { useEffect, useState } from "react";

const SvgExt = "svg";

const Image = ({ size = "md", file, mode = "cover", className, style }) => {
  const [isSvg, setIsSvg] = useState();
  const [fileUrl, setFileUrl] = useState();

  useEffect(() => {
    initialize();
    return () => {
      destroy();
    };
  }, [file]);

  const initialize = async () => {
    setIsSvg(file.split(".").at(-1) === SvgExt);
    setFileUrl(file);
  };

  const destroy = () => {};

  let svgMode;
  switch (mode) {
    case "contain":
      svgMode = "xMidYMid meet";
      break;
    case "stretch":
      svgMode = "none";
      break;
    case "center":
      svgMode = "xMidYMid";
      break;
    case "cover":
    default:
      svgMode = "xMidYMid slice";
      break;
  }
  return (
    file &&
    (isSvg ? (
      <SvgUri
        uri={file}
        preserveAspectRatio={svgMode}
        width={"100%"}
        height={"100%"}
        style={style}
      />
    ) : (
      <ImageGS
        size={size}
        source={{
          uri: file,
        }}
        alt="Soupbun"
        className={className}
        style={style}
      />
    ))
  );
};

export { Image };

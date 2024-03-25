import LeftContentBlock from "./SolfilmBlock";
import RightContentBlock from "./WrappingBlock";
import PPFContentBlock from "./PPFBlock";
import ChromeContentBlock from "./ChromeDeleteBlock";
import BuildingContentBlock from "./BuildingBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "ppf") return <PPFContentBlock {...props} />;
  if (props.type === "chrome") return <ChromeContentBlock {...props} />;
  if (props.type === "building") return <BuildingContentBlock {...props} />;
  return null;
};

export default ContentBlock;

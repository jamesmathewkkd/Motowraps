import { SvgIconProps } from "../types";
import {
  img
} from "./styles";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <div id="img">
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
  </div>
);

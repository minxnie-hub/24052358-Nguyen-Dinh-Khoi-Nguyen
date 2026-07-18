import { asset } from "@/lib/assets";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

export function AssetImage({ src, alt = "", ...props }: Props) {
  return <img src={asset(src)} alt={alt} {...props} />;
}

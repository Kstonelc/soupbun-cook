import { Box as BoxGS } from "@/components/ui/box";
const Box = ({
  scroll = null, // vertical, horizontal
  className,
  style,
  children,
  ...props
}) => {
  return (
    <BoxGS {...props} className={className} style={style}>
      {children}
    </BoxGS>
  );
};

export { Box };

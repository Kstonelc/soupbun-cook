import { Text as TextGS } from "@/components/ui/text";
const Text = ({
  size = "md",
  ellipsize = false,
  bold = false,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <TextGS className={className} size={size} bold={bold} style={style}>
      {children}
    </TextGS>
  );
};

export { Text };

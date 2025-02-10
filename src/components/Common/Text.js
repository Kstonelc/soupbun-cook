import { Text as TextGS } from "@/components/ui/text";
const Text = ({
  size = "md",
  color = "black",
  ellipsize = false,
  bold = false,
  className,
  children,
  ...props
}) => {
  return <TextGS>{children}</TextGS>;
};

export { Text };

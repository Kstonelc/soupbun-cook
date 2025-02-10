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
  return <TextGS className={className}>{children}</TextGS>;
};

export { Text };

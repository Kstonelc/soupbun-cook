import { Text as TextGS } from "@/components/ui/text";
const Text = ({
  size = "md",
  ellipsize = false,
  bold = false,
  className,
  children,
  ...props
}) => {
  return (
    <TextGS className={className} size={size} bold={bold}>
      {children}
    </TextGS>
  );
};

export { Text };

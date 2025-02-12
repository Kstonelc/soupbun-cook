import {
  Avatar as AvatarGS,
  AvatarFallbackText as AvatarFallbackTextGS,
  AvatarImage as AvatarImageGS,
} from "@/components/ui/avatar";

const Avatar = ({ size = "md", url }) => {
  return (
    <AvatarGS size={size}>
      <AvatarFallbackTextGS>S</AvatarFallbackTextGS>
      <AvatarImageGS
        source={{
          uri: url,
        }}
      />
    </AvatarGS>
  );
};

export { Avatar };

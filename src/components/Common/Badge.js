import {
  Badge as BadgeGS,
  BadgeIcon as BadgeIconGS,
  BadgeText as BadgeTextGS,
} from "@/components/ui/badge";
import { Mars } from "lucide-react-native";
import { GlobeIcon } from "@/components/ui/icon";

const Badge = () => {
  return (
    <BadgeGS
      size="md"
      variant="soild"
      action="warning"
      className={"rounded-xl"}
    >
      <BadgeIconGS as={Mars} className="mr-1" />
      <BadgeTextGS>27岁</BadgeTextGS>
    </BadgeGS>
  );
};

export { Badge };

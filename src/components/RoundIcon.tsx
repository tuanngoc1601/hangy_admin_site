import classNames from "classnames";
import { FC, SVGProps } from "react";

interface RoundIconProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  iconColorClass?: string;
  bgColorClass?: string;
  className?: string;
}

function RoundIcon({
  icon: Icon,
  iconColorClass = "text-purple-600 dark:text-purple-100",
  bgColorClass = "bg-purple-100 dark:bg-purple-600",
  className,
}: RoundIconProps) {
  const baseStyle = "p-3 rounded-full";

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className);
  return (
    <div className={cls}>
      <Icon className="w-5 h-5" />
    </div>
  );
}

export default RoundIcon;

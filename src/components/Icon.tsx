interface IconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}
const Icon = ({ icon, ...props }: IconProps) => {
  const Icon = icon;
  return <Icon {...props} />;
};

export default Icon;

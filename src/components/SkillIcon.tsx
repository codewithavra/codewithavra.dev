/**
 * @license Apache-2.0
 * @copyright codewithavra
 */
type Props = {
    icon: string;
    size?: number;
  };
  
  export const SkillIcon = ({ icon, size = 20 }: Props) => (
    <img
      src={`https://skillicons.dev/icons?i=${icon}`}
      alt={icon}
      width={size}
      height={size}
    />
  );
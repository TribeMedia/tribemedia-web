import { LucideProps, icons as LucideIcons } from 'lucide-react';
import { ElementType } from 'react';

type IconName = keyof typeof LucideIcons;

export function getIconComponent(iconName: string): ElementType<LucideProps> | undefined {
  const validIconName = iconName as IconName;
  const IconComponent = LucideIcons[validIconName];
  
  if (typeof IconComponent === 'function' && 'displayName' in IconComponent) {
    return IconComponent as ElementType<LucideProps>;
  }
  
  return undefined;
}
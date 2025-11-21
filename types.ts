import { LucideIcon } from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  icon?: LucideIcon;
}

export enum ViewMode {
  DESKTOP = 'desktop',
  MOBILE = 'mobile'
}
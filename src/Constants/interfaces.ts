export interface NavItem {
  label: string;
  src: string;
  subItems?: { label: string; link: string }[];
}
export interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  title? : string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
  overlayColor?: string;
}
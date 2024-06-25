import {
  BarChart2,
  FileQuestion,
  HelpCircle,
  Home,
  LucideIcon,
  Users2,
} from 'lucide-react';
import { IconType } from 'react-icons';

export const LINKS: {
  href: string;
  label: string;
  icon: IconType | LucideIcon;
}[] = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '#tentang', label: 'Tentang Kami', icon: Users2 },
  { href: '#fitur', label: 'Fitur', icon: BarChart2 },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/bantuan', label: 'Bantuan', icon: FileQuestion },
];

export const AUTH_LINKS = {
  login: { href: '/auth/masuk', label: 'Masuk' },
  register: { href: '/auth/daftar', label: 'Daftar' },
  'forgot-password': { href: '/auth/lupa-sandi', label: 'Lupa Kata Sandi?' },
  'reset-password': {
    href: '/auth/reset-sandi',
    label: 'Atur Ulang Kata Sandi',
  },
};

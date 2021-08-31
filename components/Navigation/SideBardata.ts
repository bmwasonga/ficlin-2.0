import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/admin/' },
  { name: 'Users', icon: FiTrendingUp, href: '/admin/users' },
  { name: 'Companies', icon: FiCompass, href: '/admin/creators' },
  { name: 'Trips', icon: FiStar, href: '/admin/activetrips' },
  { name: 'Bookings', icon: FiStar, href: '/admin/activetrips' },
  { name: 'Reservations', icon: FiStar, href: '/admin/reservations' },
  { name: 'Settings', icon: FiSettings, href: '/admin/communication' }
];

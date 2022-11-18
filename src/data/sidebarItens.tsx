import { BiHomeAlt } from 'react-icons/bi';
import { MdPeople } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { GrProjects, GrPlan } from 'react-icons/gr';

interface SidebarItensProps {
  name: string;
  icon: React.ReactNode;
}

export const sidebarItens = [
  {
    name: 'Dashboard',
    icon: <BiHomeAlt />,
  },
  {
    name: 'Orders',
    icon: <GrPlan />,
  },
  {
    name: 'Customers',
    icon: <MdPeople />,
  },
  {
    name: 'Products',
    icon: <GrProjects />,
  },
  {
    name: 'Analytics',
    icon: <GoGraph />,
  },
] as SidebarItensProps[];
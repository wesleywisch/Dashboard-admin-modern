import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

interface UpdatesItensProps {
  img: string;
  name: string;
  not1: string;
  time: string;
}

export const UpdatesItens = [
  {
    img: img1,
    name: 'Andrew Thomas',
    not1: 'Has ordered apple smart watch 2500mh battery',
    time: '25 seconds ago',
  },
  {
    img: img2,
    name: 'James Bond',
    not1: 'Has received samsung gadget for charging battery',
    time: '30 minutes ago',
  },
  {
    img: img3,
    name: 'Iron Man',
    not1: 'Has ordered apple smart watch, samsung gear 2500mh battery',
    time: '2 hours ago',
  },
] as UpdatesItensProps[];
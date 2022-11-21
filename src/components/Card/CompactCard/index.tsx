import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';

import { CardProps } from '../index';

import './styles.css';

interface CompactCardProps extends CardProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function CompactCard({ icon, value, barValue, color, series, title, setExpanded }: CompactCardProps) {
  return (
    <motion.div
      className='compactCardContainer'
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      onClick={() => setExpanded(true)}
      layoutId='expandableCard'
    >
      <div className="radialBar">
        <CircularProgressbar
          value={barValue}
          text={`${barValue}%`}
        />
        <span>{title}</span>
      </div>

      <div className="detail">
        {icon}
        <span>{value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}
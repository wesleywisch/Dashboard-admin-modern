import { useState } from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.png';
import { sidebarItens } from '../../data/sidebarItens';

import './styles.css';

export function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%'
    }
  }

  return (
    <>
      <div
        className='bars'
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars />
      </div>

      <motion.div
        className="sidebar-container"
        variants={sidebarVariants}
        animate={window.innerHeight <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {sidebarItens.map((item, key) => (
            <div
              key={key}
              className={`menuItem ${selected === key && 'active'}`}
              onClick={() => setSelected(key)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}

          <div className="menuItem">
            <CiLogout />
            <span>Sign out</span>
          </div>
        </div>
      </motion.div>
    </>
  )
}
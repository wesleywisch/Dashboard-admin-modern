import { useState } from 'react';
import { CiLogout } from 'react-icons/ci';

import logo from '../../assets/logo.png';
import { sidebarItens } from '../../data/sidebarItens';

import './styles.css';

export function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar-container">
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
    </div>
  )
}
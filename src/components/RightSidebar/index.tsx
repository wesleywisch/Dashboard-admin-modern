import { Updates } from '../Updates';

import './styles.css';

export function RightSidebar() {
  return (
    <div className='rightSidebarContainer'>
      <div>
        <h3>Updates</h3>

        <Updates />
      </div>

      <div>
        <h3>Customer review</h3>
      </div>
    </div>
  )
}
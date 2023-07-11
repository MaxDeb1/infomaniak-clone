import { useState } from 'react';
import { css } from '../../../styled-system/css'
import Popup from './Popup';

const MenuApplications = () => {
  const [ isPopupOpen, setIsPopupOpen] = useState(false)
  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <div id='openPopup' className={css({ height: '66px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: '20px', cursor: 'pointer', _hover:{ backgroundColor: '#f2f4f6'}, position: 'relative' })} onMouseDown={handleClick}>
      <div className={css({ width: '20px', height: '20px'})}>
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <path fill="#666" d="M2.333.33H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2V2.329a2 2 0 012-2zM2.333 11.663H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.666a2 2 0 012-2zM2.333 22.996H7a2 2 0 012 2v4.667a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.667a2 2 0 012-2zM13.667.33h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2V2.329a2 2 0 012-2zM13.667 11.663h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.666a2 2 0 012-2zM13.667 22.996h4.666a2 2 0 012 2v4.667a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.667a2 2 0 012-2zM25 .33h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2V2.329a2 2 0 012-2zM25 11.663h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.666a2 2 0 012-2zM25 22.996h4.667a2 2 0 012 2v4.667a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.667a2 2 0 012-2z"></path>
        </svg>
      </div>
      {isPopupOpen &&
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      }
    </div>
  );
};

export default MenuApplications;
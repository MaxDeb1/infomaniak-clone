import { useState } from "react";
import { css } from '../../../styled-system/css'

const Links = () => {
  const [leftPosition, setLeftPosition] = useState<number | undefined>()
  const handleHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setLeftPosition(e.currentTarget.offsetLeft + 20)
  }
  
  return (
    <ul className={css({ height: '66px', display: 'flex', alignItems: 'center', listStyle: 'none', position: 'relative'})}>
      <li
        className={`peer ${css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}`}
        onMouseEnter={handleHover}
      >
        <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>Produits</span>
      </li>
      <li
        className={`peer ${css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}`}
        onMouseEnter={handleHover}
      >
        <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>À propos</span>
      </li>
      <li
        className={`peer ${css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}`}
        onMouseEnter={handleHover}
      >
        <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>Support</span>
      </li>
      <div className={css({ _peerHover: { animation: 'grow .2s ease', width: '65px', display: 'flex'}, width: '35px', height: '3px', backgroundColor: '#0098ff', borderRadius:'100px', display: 'none', transformOrigin: 'center', transition: 'all 0.2s ease', position: 'absolute', bottom: '0', left: `${leftPosition}px` })}/>
    </ul>
  );
};

export default Links;
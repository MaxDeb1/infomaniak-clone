import { useState } from 'react';
import { css } from '../../../styled-system/css'

const Language = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isActive, setisActive ] = useState('FR')

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setisActive(((e.target as HTMLLIElement).childNodes[0].textContent!))
  }

  const options = ["FR", "DE", "EN", "ES", "IT"]

    return (
      <div className={css({ position: 'relative' })}>
        <div
          className={css({ display: 'flex', alignItems: 'center', lineHeight: '1.5rem', color: '#666', backgroundColor: isOpen ? '#F2F4F6' : '#E8E9EC', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' })}
          onClick={handleClick}
        >
          <div className={css({ height: 'auto', minHeight: '1.4375em', padding: "7px 24px 7px 12px" })}>
            <p className={css({ width: '19px', fontSize: '14px', lineHeight: '21px', fontWeight: '600' })}>
              {isActive}
            </p>
          </div>
          <svg className={css({ width: '1em', height: '1em', fill: 'rgba(0, 0, 0, 0.54)', fontSize: '1.5rem', position: 'absolute', right: '0', top: 'calc(50% - 0.4em)', rotate: isOpen ?'180deg' : undefined })} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        { isOpen &&
          <div className={css({ width: '54px', backgroundColor: '#fff', color: 'rgb(51, 51, 51)', borderRadius: '4px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px', position: 'absolute', top: '36px', left: '0px', zIndex:'2', opacity: '1' })}>
          <ul className={css({ paddingBlock: '8px' })}>
              {options.map(option => (
                <li
                  key={option}
                  className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 16px', cursor: 'pointer', _hover: { backgroundColor : 'rgb(242, 242, 246)' }, backgroundColor : option === isActive ? 'rgb(242, 242, 246)' : undefined })}
                  onClick={handleSelect}
                >
                  <p className={css({ fontSize: '14px', lineHeight: '21px', fontWeight: '600' })}>
                    {option}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    );
};

export default Language;
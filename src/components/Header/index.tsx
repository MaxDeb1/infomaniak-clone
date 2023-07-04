import { css } from '../../../styled-system/css'
import logo from '../../assets/logo-infomaniak.svg'
import Dropdown from './Dropdown';
import Links from './Links';
import Switch from './Switch';

const Header = () => {
  
  return (
    <header className={css({ height: '66px', backgroundColor: '#fff'})}>
      <nav className={css({ display: 'flex', alignItems: 'center', maxWidth: '1254px', height: '100%', marginInline: 'auto', paddingInline: '15px' })}>
        <a href="">
          <img className={css({ height: '19.19px', marginRight: '40px' })} src={logo} alt="" />
        </a>
        <Links />
        <div className={css({ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' })}>
          <Dropdown />
          <Switch />

          <div className={css({ height: '66px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: '20px', cursor: 'pointer', _hover:{ backgroundColor: '#f2f4f6' } })}>
            <div className={css({ width: '20px', height: '20px'})}>
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path fill="#666" d="M2.333.33H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2V2.329a2 2 0 012-2zM2.333 11.663H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.666a2 2 0 012-2zM2.333 22.996H7a2 2 0 012 2v4.667a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.667a2 2 0 012-2zM13.667.33h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2V2.329a2 2 0 012-2zM13.667 11.663h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.666a2 2 0 012-2zM13.667 22.996h4.666a2 2 0 012 2v4.667a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.667a2 2 0 012-2zM25 .33h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2V2.329a2 2 0 012-2zM25 11.663h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.666a2 2 0 012-2zM25 22.996h4.667a2 2 0 012 2v4.667a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.667a2 2 0 012-2z"></path>
              </svg>
            </div>
          </div>

          <div className={css({ height: '66px', display: 'flex', alignItems: 'center' })}>
            <a href="" className={css({ height: '100%', display: 'flex',alignItems: 'center', color: '#0098ff', fontSize: '14px', fontWeight: '600', paddingInline: '12px', cursor: 'pointer' })}>
              Inscription
            </a>
            <a href="" className={css({ height: '100%', display: 'flex',alignItems: 'center', backgroundColor: '#0098ff', color: '#fff', fontSize: '14px', fontWeight: '600', paddingInline: '12px', cursor: 'pointer' })}>
              Connexion
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

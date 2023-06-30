import { css } from '../../styled-system/css'
import logo from '../assets/logo-infomaniak.svg'

const Header = () => {
  return (
    <header className={css({ height: '66px', backgroundColor: 'white'})}>
      <nav className={css({ display: 'flex', alignItems: 'center', maxWidth: '1254px', height: '100%', marginInline: 'auto', paddingInline: '15px' })}>
        <a href="">
            <img className={css({ height: '19.19px', marginRight: '40px' })} src={logo} alt="" />
        </a>
        <ul className={css({ height: '66px', display: 'flex', alignItems: 'center', listStyle: 'none', })}>
          <li className={css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}>
            <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>Produits</span>
          </li>
          <li className={css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}>
            <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>À propos</span>
          </li>
          <li className={css({ width: '105px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' })}>
            <span className={css({ fontSize: '0.875rem', fontWeight: '600' })}>Support</span>
          </li>
        </ul>
        <div className={css({ display: 'flex', alignItems: 'center', marginLeft: 'auto' })}>
          <select name="language" id="language">
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="it">IT</option>
          </select>
          <div className={css({ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '25px', backgroundColor: '#f2f4f6', borderRadius: '100px', fontSize: '8px', cursor: 'pointer', position: 'relative' })}>
            <div className={css({ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' })}>HT</div>
            <div className={css({ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' })}>TTC</div>
          </div>
          <div className={css({ height: '66px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: '20px', cursor: 'pointer', _hover:{ backgroundColor: '#f2f4f6' } })}>
              <div className={css({ width: '20px', height: '20px'})}>
                <svg width="100%" height="100%" viewBox="0 0 32 32">
                    <path fill="#666" d="M2.333.33H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2V2.329a2 2 0 012-2zM2.333 11.663H7a2 2 0 012 2v4.666a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.666a2 2 0 012-2zM2.333 22.996H7a2 2 0 012 2v4.667a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-4.667a2 2 0 012-2zM13.667.33h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2V2.329a2 2 0 012-2zM13.667 11.663h4.666a2 2 0 012 2v4.666a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.666a2 2 0 012-2zM13.667 22.996h4.666a2 2 0 012 2v4.667a2 2 0 01-2 2h-4.666a2 2 0 01-2-2v-4.667a2 2 0 012-2zM25 .33h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2V2.329a2 2 0 012-2zM25 11.663h4.667a2 2 0 012 2v4.666a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.666a2 2 0 012-2zM25 22.996h4.667a2 2 0 012 2v4.667a2 2 0 01-2 2H25a2 2 0 01-2-2v-4.667a2 2 0 012-2z"></path>
                </svg>
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

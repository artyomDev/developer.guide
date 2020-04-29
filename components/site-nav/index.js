import { HeaderWrap } from './style';

const SiteNav = () => (
  <HeaderWrap>
    <div className='top-row container'>
      <div className='flex-grow-1 brand'>
        <a href='/'>
          <img src='/brand.png' alt='' />
        </a>
      </div>
      <div className='nav-links'>
        <a href='/guides'>Read</a>
        <a href='/watch'>
          Watch
          <span className='new-item' />
        </a>
      </div>
    </div>
  </HeaderWrap>
);

export default SiteNav;

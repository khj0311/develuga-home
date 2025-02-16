import { StyledNavigation } from '../../common/styles/styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className='container'>
        <div className='wrapper'>
          <div className='left-side'>
            <div className='logo'>
              <a href='javascript:void(0)'>Develuga</a>
            </div>
          </div>
          <div className='right-side'>
            <div className='menu-wrapper'>
              <a href='javascript:void(0)'>About Me</a>
              <a href='javascript:void(0)'>Skills</a>
              <a href='javascript:void(0)'>Career</a>
              <a href='javascript:void(0)'>Projects</a>
              <a href='javascript:void(0)'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;

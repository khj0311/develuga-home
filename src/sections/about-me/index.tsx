import styled from 'styled-components';
import { StyledSection } from '../../common/styles/styled';

const AboutMe = () => {
  return (
    <StyledSection className='about-me'>
      <div className='container'>
        <div className='title'>
          <div className='title-text'>About Me.</div>
        </div>

        <StyledAboutMe className='content'>
          <div className='content-image'>
            <img src='/assets/images/about-me.jpeg' alt='' />
          </div>
          <div className='content-desc'>
            안녕하세요.
            <br />
            멈추지 않는 프론트엔드 개발자 김현준 입니다.
          </div>
        </StyledAboutMe>
      </div>
    </StyledSection>
  );
};

const StyledAboutMe = styled.div`
  display: flex;
  gap: 16px;

  .content-image {
    width: 360px;
    height: 360px;
    display: flex;
    justify-content: center;
    background: #e9e9f0;
    clip-path: inset(0 round 50%);

    & > img {
      width: auto;
      height: 100%;
      scale: 1.1;
    }
  }
`;
export default AboutMe;

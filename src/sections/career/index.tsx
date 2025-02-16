import styled from 'styled-components';
import { StyledSection } from '../../common/styles/styled';

const Career = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='title'>
          <div className='title-text'>Career.</div>
        </div>

        <StyledCareer className='content'></StyledCareer>
      </div>
    </StyledSection>
  );
};

const StyledCareer = styled.div``;

export default Career;

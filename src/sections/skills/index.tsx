import styled from 'styled-components';
import { StyledSection } from '../../common/styles/styled';

const Skills = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='title'>
          <div className='title-text'>Skills.</div>
        </div>

        <StyledSkills className='content'></StyledSkills>
      </div>
    </StyledSection>
  );
};

const StyledSkills = styled.div``;

export default Skills;

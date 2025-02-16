import styled from 'styled-components';
import { StyledSection } from '../../common/styles/styled';

const Projects = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='title'>
          <div className='title-text'>Projects.</div>
        </div>

        <StyledProjects className='content'></StyledProjects>
      </div>
    </StyledSection>
  );
};

const StyledProjects = styled.div``;

export default Projects;

import './common/styles/reset.css';
import { styled } from 'styled-components';
// Header
import Navigation from './sections/navigation';
// Content
import AboutMe from './sections/about-me';
import Skills from './sections/skills';
import Career from './sections/career';
import Projects from './sections/projects';

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <Navigation />
      </header>

      {/* Content */}
      <StyledContent>
        <AboutMe />
        <Skills />
        <Career />
        <Projects />
      </StyledContent>
    </>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;

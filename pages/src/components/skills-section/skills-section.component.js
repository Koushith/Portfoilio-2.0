import { Container } from '../common/container/container.component';
import { SocialContainer } from './skills-section.component.styles';

export const SkillsSection = () => {
  return (
    <Container>
      <h2>Skills</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, facilis.</p>

      <div>
        <SocialContainer>
          <li>
            <i className='fa-brands fa-react' />
          </li>
          <li>
            <i className='fa-brands fa-js' />
          </li>
          <li>
            <i className='fa-brands fa-ts' />
          </li>
          <li>
            <i className='fa-brands fa-node' />
          </li>
          <li>
            <i className='fa-brands fa-dribbble-square' />
          </li>
        </SocialContainer>
      </div>
    </Container>
  );
};

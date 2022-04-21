import Link from 'next/link';
import { Container } from '../container/container.component';
import { FooterContainer, Navs, StyledDiv, Copy } from './footer.component.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Navs>
          <StyledDiv>
            <h3>Main Links</h3>
            <ul>
              <li>About</li>
              <li>Timelines</li>
              <li>Blogs</li>
            </ul>
          </StyledDiv>
          <StyledDiv>
            <h3>Proof of Work</h3>
            <ul>
              <li>GitHub</li>
              <li>Dribble</li>
              <li>Live Streams</li>
            </ul>
          </StyledDiv>
          <StyledDiv>
            <h3>Social</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Not usre</li>
            </ul>
          </StyledDiv>
        </Navs>
        <Copy>
          <div>
            <a href='https://github.com/koushith/Portfoilio-2.0' target='_next'>
              <p> Crafted with ❣️ by Koushith Amin. &copy; Heck No!! 100% Open Source- feel free to Clone.</p>
            </a>
          </div>
          {/* <div>
            <i className='fa-brands fa-react' />

          </div> */}
        </Copy>
      </Container>
    </FooterContainer>
  );
};

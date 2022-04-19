import Image from 'next/image';
import { Container } from '../common/container/container.component';
import {
  HeroContainer,
  InfoContainer,
  SocialContainer,
  Description,
  DescriptionContainer,
  LocationIcon,
} from './hero.component.styles';

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <InfoContainer className='name-photo'>
          <div className='name'>
            <h2>Koushith Amin</h2>
            <p>Frontend Engineer✨</p>
          </div>
          <div className='hero-avatar'>
            <img src='/profile-pic.JPG' alt='photo' layout='fill' />
          </div>
        </InfoContainer>
        <DescriptionContainer>
          <p>Hey, I'm koushith</p>
          <Description>
            I'm a Bangalore based Product Designer and Frontend Engineer. currently crafting Beautiful UI's and Building
            the interface for web3 Apps <span>@ConsensoLabs</span> .
          </Description>
          <Description>
            {' '}
            <LocationIcon className='fa-solid fa-location-pin' />
            Remote || Bengaluru
          </Description>
          <SocialContainer>
            <li>
              <i className='fa-brands fa-github' />
            </li>
            <li>
              <i className='fa-brands fa-twitter' />
            </li>
            <li>
              <i className='fa-brands fa-linkedin' />
            </li>
            <li>
              <i className='fa-brands fa-youtube' />
            </li>
            <li>
              <i className='fa-brands fa-dribbble-square' />
            </li>
          </SocialContainer>
        </DescriptionContainer>
      </Container>
    </HeroContainer>
  );
};

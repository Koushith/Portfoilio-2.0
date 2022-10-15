import Image from "next/image";
import { Container } from "../common/container/container.component";
import {
  HeroContainer,
  InfoContainer,
  SocialContainer,
  Description,
  DescriptionContainer,
  LocationIcon,
} from "./hero.component.styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <InfoContainer className="name-photo">
          <div className="name">
            <h2>Koushith Amin</h2>
            <p className="job-title">Frontend Engineer✨</p>
          </div>
          <div className="hero-avatar">
            <img src="/profile-pic.JPG" alt="photo" layout="fill" />
          </div>
        </InfoContainer>
        <DescriptionContainer>
          <p>Hola,</p>
          <Description>
            I'm a Bangalore based Product Designer and Frontend Engineer.
            currently crafting Beautiful UI's and Building the interface for
            web3 Apps <span>@ConsensoLabs</span> .
          </Description>
          <Description>
            {" "}
            <LocationIcon className="fa-solid fa-location-pin" />
            Remote || Bengaluru
          </Description>
          <SocialContainer>
            <li>
              <i
                className="fa-brands fa-github"
                onClick={() =>
                  window.open("https://github.com/koushith", "_blank")
                }
              />
            </li>
            <li>
              <i
                className="fa-brands fa-twitter"
                onClick={() =>
                  window.open("https://twitter.com/KoushithAmin", "_blank")
                }
              />
            </li>
            <li>
              <i
                className="fa-brands fa-linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/koushith-amin-663787146/",
                    "_blank"
                  )
                }
              />
            </li>
            <li>
              <i
                className="fa-brands fa-youtube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UC2jU6KNhrAPJ4LIWDuiagnA/videos",
                    "_blank"
                  )
                }
              />
            </li>
            <li>
              <i
                className="fa-brands fa-dribbble-square"
                onClick={() =>
                  window.open("https://dribbble.com/Koushith", "_blank")
                }
              />
            </li>
          </SocialContainer>
        </DescriptionContainer>
      </Container>
    </HeroContainer>
  );
};

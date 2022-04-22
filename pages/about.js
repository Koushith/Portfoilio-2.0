import styled from 'styled-components';

const AboutContainer = styled.div`
  margin-top: 4rem;
  h3 {
    color: #d9e3ea;
    font-size: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  .principles {
    margin-top: 1rem;
  }
`;

const Paragraph = styled.p`
  line-height: 3.2rem;
  font-size: 1.8rem;
  margin: 3.2rem 0;
`;

const About = () => {
  return (
    <AboutContainer>
      <h3>About me in 10 Seconds</h3>
      <div>
        <Paragraph style={{ textDecoration: 'line-through' }}>
          Hello, everyone ✋ I&apos;m a software developer living in Bangalore, India. I love to build and design
          things. I have experience in creating cross-platform desktop applications, website backends, user experience,
          and visual design. I have worked extensively in teams and alone.
        </Paragraph>
        <Paragraph>
          WTF? Sound human Koushith. Okay, here you go. Huh, so you&apos;re interested in knowing more about me? The
          first thing I should mention that I don&apos;t have any unique talents. I consider myself pretty average.
        </Paragraph>

        <div>
          <h3>My two life principles are: </h3>
          <div className='principles'>
            <li> Don&apos;t give up. </li>
            <li> Work really hard in the right direction. </li>
          </div>
        </div>

        <Paragraph>
          That&apos;s how I have achieved whatever you see so far. Born in a small Village in Kodagu also known as
          (Coorg- Scotland of India), I have humble beginnings. Until 2016, the only thing I knew about computers was
          that it was invented by a guy named Charles or something..From there, I have taught myself everything.
          I&apos;m still learning. I still have to Google the basic stuff like adding inline CSS in HTML :p.
        </Paragraph>
      </div>
    </AboutContainer>
  );
};

export default About;

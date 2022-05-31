import { Description, RoadMapContainer, RoadMaps, YearContainer, TimeFrameContainer } from './roadmap.component.styles';

export const TimeFrame = ({ children, year, heading }) => {
  return (
    <RoadMapContainer>
      <RoadMaps>
        <YearContainer>
          <p>{year} </p>
        </YearContainer>
        <Description>
          <h4>{heading}</h4>
          <div className='details'>{children}</div>
        </Description>
      </RoadMaps>
    </RoadMapContainer>
  );
};

export const RoadMap = () => {
  return (
    <TimeFrameContainer>
      <h2>Timeline</h2>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <li> We began our user research for the problem and solution that we deviced for crypto asset inheritance.</li>
        <li>
          Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </li>
      </TimeFrame>

      <TimeFrame year='2021 FEB' heading='Genesis of a sister product of Safient at ETHDenver 🚀'>
        <li>
          We built a confidential portfolio sharing application (Portex) at ETHDenver 2021 to validate the technical
          feasibility. Portex gained a lot of traction for the implementation and was recognized as one of the top 20
          hacks 🎊 .
        </li>
      </TimeFrame>

      <TimeFrame year='2021 APRIL' heading='Safient design and prototype ✨'>
        <li>
          Taking all the feedback from our hackathon project, we started to design and prototype the solution for
          Safient. We planned all the features, integrations and laid out our architecture for the initial
          implementation, and conducted a detailed user research survey to verify our solution approach.
        </li>

        <strong>
          Safient was one of the top 3 projects in the{' '}
          <a
            href='https://filecoin.io/blog/posts/249k-for-17-projects-from-dorahacks-filecoin-grant-hackathon/'
            target='_next'
          >
            DoraHack&apos;s Filecoin Grant program.
          </a>{' '}
        </strong>
      </TimeFrame>

      <TimeFrame year='2021 Q4' heading='Demo and Private beta release 🧪'>
        <p>Private beta demo to the community. Features include:</p>
        <li>Initial community edition application for safekeeping and inheritance with a few safe claim approach.</li>
        <li> SDKs to communicate with our alpha version of Safient protocol.</li>
      </TimeFrame>

      <TimeFrame year='2022 Q1' heading='Beta release to the community 🚀'>
        <p>Features include:</p>
        <li> Well tested and audited contracts for inheritance claims</li>
        <li> Well tested Safient protocol to create, access, claim safes.</li>
        <li> Planned economics to generate the right traction (value) for the users and incentivized actors</li>
      </TimeFrame>

      <TimeFrame year='2022 Q2' heading='Audit and mainnet release 🚀'>
        <p>Main net release for the community. Features include:</p>
        <li> Safient will undergo bug bounty program and security audit before the mainnet release</li>
      </TimeFrame>
    </TimeFrameContainer>
  );
};

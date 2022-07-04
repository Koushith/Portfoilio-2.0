import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { UnderlinedButton } from '../primitives/button/button.component';

const Divider = styled.div`
  border: 1px solid #9ba9b4;
`;

export const StyledList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  svg {
    height: 2.4rem;
  }
`;

export const StepsContainer = styled.li`
  margin: 0 0 4rem 2rem;
`;

const Year = ({ children }) => {
  return (
    <h3 className='text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>{children}</h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <StepsContainer>
      <StyledList>
        <span className='sr-only'>Check</span>
        <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
          <g fill='none' stroke='#047857' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <p className='font-medium text-gray-900 dark:text-gray-100'>{title}</p>
      </StyledList>
      <p className='text-gray-700 dark:text-gray-400 ml-6'>{children}</p>
    </StepsContainer>
  );
};

const FullTimeline = () => (
  <>
    <Year>2019</Year>
    <ul>
      <Step title='First Solo Trip -Nov 11th 2019✨'>Went on Solo trip to Puducherry.</Step>

      <Step title='First Job- Infosys Limited - May 2019.'>
        There is no word to describe it. One thing I know, that I had never felt like that ever before.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title='First Computer'>I remember many nights playing Age of Empires, Lego Island, and Runescape.</Step>
    </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>Timeline</h3>
      <Year>2021</Year>
      <ul>
        <Step title='Second Hackathon @EthDenver- Feb 5th-9th 2021'>
          ETHDenver is the world’s largest annual web3 #BUIDLathon. we hacked
          <Link href='https://portex.xyz/'>
            <a target='_next' className='text-blue-900'>
              Portex
            </a>
          </Link>{' '}
          -Secure crypto portfolio management and exchange Application. Portex has bagged 3 sponsor prizes during the.
          <Link href='https://github.com/koshikraj/portex'>
            <a target='_next' className='text-blue-900'>
              ETHDenver hackathon.
            </a>
          </Link>
          🎉 🎊.
        </Step>
      </ul>
      <Divider />

      <Year>2020</Year>
      <ul>
        <Step title='First Design Workshop- November 2020.'>
          Conducted a workshop on Intro to UI design using Figma for Bchain Dynamics Students.
        </Step>
        <Step title='First Hackathon @EthGlobal- October 2020'>
          Participated in ETHOnline hackathon and built SignChain - A Digital signing platform for legal documents along
          with my colleagues. Signchain has bagged 2 sponsor prizes during the{' '}
          <Link href='https://github.com/signchain/core'>
            <a target='_next' className='text-blue-900'>
              EthOnline hackathon
            </a>
          </Link>
          🎉 🎊.
        </Step>

        <Step title='First PR Merge- August 2020'>
          {' '}
          It's absolutely a satisfying feeling to get that "merge notification". I had my first PR to a Org repo merged.
        </Step>

        <Step title='Joined Consenso Labs - July 7th-2020.'>
          I'm excited to join Consenso Labs as a Founding Team member. also this is my First Dev Job.
        </Step>
        <Step title='Left Infosys Limited - 2019 May to July-2020.'>
          Left my stable job at MNC to work for Early Stage startup. i always wanted to be a part of early stage
          startup.
        </Step>
      </ul>
      <Divider />

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <UnderlinedButton onClick={() => showFullTimeline(true)}>See More</UnderlinedButton>
      )}
    </>
  );
}
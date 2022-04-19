import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 150px !important;
    height: 150px !important;
    border-radius: 50%;
    border: 5px solid #5d5dff;
    object-fit: cover;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 3.6rem;
  gap: 2rem;
  li {
    list-style: none;
    display: inline-flex;
  }
  i {
    font-size: 24px;
    cursor: pointer;
  }
  i:hover {
    color: #5d5dff;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
`;

export const Description = styled.p`
  margin-top: 1.6rem;

  span {
    color: #5d5dff;
    cursor: pointer;
  }
`;

export const LocationIcon = styled.i`
  margin-right: 1.2rem;
`;

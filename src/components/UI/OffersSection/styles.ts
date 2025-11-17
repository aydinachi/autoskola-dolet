'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 6rem auto 0;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const SectionLabel = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #8B0000 0%, #A52A2A 100%);
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 3rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;

  p {
    color: #dedede;
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem auto 0;
  max-width: 1100px;
`;

export const InfoCard = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(19, 19, 19, 0.85);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    color: #c7c7c7;
    font-size: 1rem;
    line-height: 1.7rem;
    margin: 0;
  }
`;

export const ReasonsCard = styled.article`
  margin: 3rem auto 0;
  padding: 2.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(135deg, rgba(139, 0, 0, 0.25), rgba(19, 19, 19, 0.9));
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  max-width: 1100px;

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const ReasonsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem 2rem;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 1rem;
    line-height: 1.6rem;
    color: #f5f5f5;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4rem;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: #f7c04a;
  }
`;

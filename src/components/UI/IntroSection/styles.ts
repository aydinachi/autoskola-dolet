'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--light-bordo);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
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

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
`;

export const LeftImage = styled(Image)`
  transform: rotate(270deg);
  position: absolute;
  top: 64px;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &.active {
    transform: rotate(70.281deg) translate(-50%, 60%);
    top: 60%;
  }
`;

export const MiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
`;

export const RightImage = styled(Image)`
  width: 21.875rem;
  height: 13.875rem;
  transform: rotate(90deg);
  top: 65px;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &.active {
    transform: rotate(-70.281deg) translate(50%, 60%);
    top: 60%;
  }
`;

export const PackageListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(165, 42, 42, 0.02) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(139, 0, 0, 0.1);
`;

export const PackageListTitle = styled.h3`
  color: var(--light-bordo);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const PackageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const PackageListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border-left: 3px solid var(--light-bordo);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(139, 0, 0, 0.1);
    transform: translateX(5px);
  }

  &::before {
    content: '✓';
    color: var(--light-bordo);
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
`;

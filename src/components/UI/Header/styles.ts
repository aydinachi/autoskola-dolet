'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  img {
    width: 23.52% !important; /* 33.6% - 30% = 23.52% */
    height: auto !important;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    img {
      width: 25% !important;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    cursor: pointer;
    min-width: 48px;
    min-height: 48px;

    div {
      position: absolute;
      background: var(--light-bordo);
      width: 250px;
      height: 300px;
      border-radius: 25px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: relative;
      z-index: 2;
      width: 24px;
      height: 24px;
      object-fit: cover;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  margin-left: 0.5rem;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    a {
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 20px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 200px;
    right: 20px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  img {
    width: 120px !important;
    height: auto !important;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    img {
      width: 100px !important;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 80px !important;
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
    padding: 0.5rem;
    cursor: pointer;
    min-width: 44px;
    min-height: 44px;
    border-radius: 8px;
    background: rgba(139, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 1001;

    &:hover {
      background: rgba(139, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.95);
    }

    div {
      position: absolute;
      background: #000000;
      width: 280px;
      height: 320px;
      border-radius: 20px;
      z-index: 1;
      top: 50px;
      right: -20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    img {
      position: relative;
      z-index: 2;
      width: 24px !important;
      height: 24px !important;
      object-fit: cover;
      filter: brightness(0) invert(1) !important;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    right: 30px;
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
    z-index: 1002;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    padding: 1.5rem 1rem;
    width: 240px;

    a {
      color: #ffffff !important;
      font-size: 1.1rem;
      font-weight: 400;
      padding: 0.5rem 0;
      text-align: left;
      width: 100%;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #cccccc !important;
      }
    }

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    right: 20px;
    top: 70px;
    gap: 0.6rem;
    width: 220px;
    padding: 1.2rem 0.8rem;

    a {
      font-size: 1rem;
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


export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

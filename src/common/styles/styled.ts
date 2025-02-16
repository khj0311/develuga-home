import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;

  .container {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
    padding: 8px;
    backdrop-filter: blur(8px);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    /* border: 1px solid #ddd; */
    padding: 0 16px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .left-side {
    display: flex;
    align-items: center;

    .logo {
      font-size: 24px;
      font-weight: 700;

      a {
        color: #000;
        text-decoration: none;
      }
    }
  }

  .right-side {
    .menu-wrapper {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 16px;
    }

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

export const StyledSection = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 0;

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

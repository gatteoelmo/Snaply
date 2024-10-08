import styled, { keyframes } from 'styled-components';

const rotateText = keyframes`
    from {
        transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSpinContainer = styled.div`
  position: fixed;
  bottom: 1%;
  right: 1%;
  scale: 0.5;


  .circle {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100vmax;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .logo {
    position: absolute;
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 100vmax;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 65%;
    }
  }

  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #000;
    animation: ${rotateText} 10s linear infinite;
    overflow: hidden;
    font-size: 1.3em;
    
    span {
      font-family: Montserrat, sans-serif;
      position: absolute;
      left: 50%;
      transform-origin: 0 100px;
    }
  }

`;

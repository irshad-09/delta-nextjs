import styled from 'styled-components';

const Container = styled.div`
  text-align: center;

  .logo {
    height: 40vmin;
    pointer-events: none;
  }

  .header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .link {
    color: rgb(112, 76, 182);
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: logo-float infinite 3s ease-in-out;
    }
  }

  @keyframes logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Container;

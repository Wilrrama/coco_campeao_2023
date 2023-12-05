import { styled } from "styled-components";
import fundo from "../assets/images/fundo.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  div.champion_info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    div.champion_info_team {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1,
      h2 {
        font-size: 1.2rem;
        color: whitesmoke;
        margin: 0;
      }
    }

    img.logo {
      width: 40%;
      height: 30%;
    }
  }

  figure.team_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      width: 90%;
      background-color: rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      gap: 3px;
      padding-bottom: 3px;

      h2 {
        white-space: nowrap;
        /* font-size: clamp(0.5rem, 5vw, 10px); */
        font-size: 0.5em;
        color: whitesmoke;
      }
      h3 {
        /* white-space: nowrap; */
        /* font-size: clamp(1rem, 50vw, 20px); */
        font-size: 0.2em;
        color: whitesmoke;
      }
    }
  }

  div.team_info_history {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    h1 {
      color: whitesmoke;
    }

    p {
      color: whitesmoke;
    }
  }
`;

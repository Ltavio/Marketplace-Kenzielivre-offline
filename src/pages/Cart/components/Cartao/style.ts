import styled from "styled-components";

export const CartaoStyled = styled.div`
  align-self: flex-start;
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    .containerFormCartao {
      display: flex;
      flex-wrap: wrap;
      gap: 0;

      @media screen and (min-width: 454px) {
        gap: 30px;
        flex-wrap: nowrap;
      }
    }

    .buttonFormCartao {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      
      gap: 10px;

      @media screen and (min-width: 563px) {
      }
    }
  }
`;

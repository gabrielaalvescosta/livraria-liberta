import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

export const StyledCarrosel = styled(Carousel)`
  --bg-arrow: #d5d5d5;
  --clr-arrow: #acacac;

  .rec {
    .rec-arrow {
      color: var(--clr-arrow);
      background-color: var(--bg-arrow);

      :hover {
        color: var(--clr-branco);
        background-color: var(--clr-preto);
        border-radius: 25%;
      }

      :disabled {
        visibility: hidden;
      }
    }
  }
`;

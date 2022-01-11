import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

export const StyledCarrosel = styled(Carousel)`
  --bg-arrow: #efefef;
  --clr-arrow: #fff;

  .rec {
    .rec-arrow {
        color: var(--clr-arrow);
        background-color: #dadada;
        border: 0px solid #efefef00 !important;
        box-shadow: none;

      :hover {
        color: var(--clr-branco);
        background-color: #e3e3e3;
        border-radius: 50%;
      }

      :disabled {
        visibility: hidden;
      }
    }
  }
`;

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
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        font-size: 1.6em;
        background-color: rgba(103,58,183,0.1);
        color: #333;
        box-shadow: none;
        border-radius: 50%;
        border: none;
        padding: 0;
        width: 50px;
        height: 50px;
        min-width: 50px;
        line-height: 50px;
        align-self: center;

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

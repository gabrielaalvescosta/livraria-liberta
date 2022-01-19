import styled from "styled-components";
import Carousel from 'react-elastic-carousel';

export const StyledCarrosel = styled(Carousel)`
  --bg-arrow: rgba(103, 58, 183, .1);
  --clr-arrow: #999;

  .rec {
    .rec-arrow {
      --size: 50px;

      position: relative;
      top: 50%;
      width: var(--size);
      min-width: 50px;
      height: var(--size);
      color: var(--clr-arrow);
      font-size: 1.3em;
      background-color: var(--bg-arrow);
      border-radius: 50%;
      box-shadow: none;
      transition: 300ms ease;

      &:hover {
        color: var(--clr-branco);
        background-color: #e3e3e3;
        border-radius: 50%;
      }

      &:disabled {
        visibility: hidden;
      }
    }
  }
`;

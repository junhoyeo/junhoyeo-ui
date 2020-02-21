import styled, { css } from 'styled-components';

import Text from '../atoms/Text';

const TextWithInput = Text.withComponent('input');

type InputProps = {
  bold?: boolean;
};

const Input = styled(TextWithInput)<InputProps>`
  font-size: 0.98rem;
  padding: 0.5rem 0.5rem;
  background-color: #f8f9fa;
  border: none;
  border-bottom: 2px solid #dee2e6;
  transition: border-color 0.2s ease-out;
  line-height: 1.5;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #610eeb;
  }

  &::placeholder {
    color: #cbcfd4;
  }

  ${({ bold }) => bold && css`
    font-weight: bold;
    border-bottom-width: 3px;
  `};

  ${({ type }) => type === 'password' && css`
    letter-spacing: 3.5px;

    &::placeholder {
      letter-spacing: -0.35px;
    }
  `};
`;

export default Input;

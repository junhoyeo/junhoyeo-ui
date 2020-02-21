import styled from 'styled-components';

const Text = styled.span`
  font-size: 112.5%;
  font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  line-height: 1.45;
  letter-spacing: -0.35px;
  color: rgba(0, 0, 0, 0.95);
`;

/**
 * @component
 * */
export default Text;

export const TextWithLink = Text.withComponent('a');
export const TextWithButton = Text.withComponent('button');

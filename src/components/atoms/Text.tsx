import styled from 'styled-components';

const Text = styled.span`
`;

export default Text;

export const TextWithLink = Text.withComponent('a');
export const TextWithButton = Text.withComponent('button');

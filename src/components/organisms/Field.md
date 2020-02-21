### Usage

```jsx
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 500px;
`;

const CustomField = styled(Field)`
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

<Container>
  <CustomField
    label="아이디"
    placeholder="멋진 아이디를 알려 주세요."
  />
  <CustomField
    label="패스워드"
    placeholder="안전한 패스워드를 입력해 주세요."
    type="password"
  />
</Container>
```

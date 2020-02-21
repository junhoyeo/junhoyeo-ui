### Usage

```jsx
import styled from 'styled-components';

const CustomInput = styled(Input)`
  width: 85%;
  max-width: 500px;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

<>
  <CustomInput
    placeholder="Search Anything"
  />
  <br />
  <CustomInput
    placeholder="Passwords are letter-spaced effectively"
    type="password"
  />
  <br />
  <CustomInput
    placeholder="Bold design gives you impact"
    bold={true}
  />
</>
```

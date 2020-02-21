import * as React from 'react';
import styled from 'styled-components';

import Input from '../molecules/Input';
import Label from '../molecules/Label';

type FieldProps = {
  label: string;
  value: string;
  className?: string;
  bold?: boolean;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Field: React.FC<FieldProps> = ({
  label, value, onChange,
  className = '',
  bold = false,
  type = 'text',
  placeholder = '',
}) => {
  return (
    <FieldContainer
      className={className}
    >
      <Label>
        {label}
      </Label>
      <Input
        bold={bold}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FieldContainer>
  );
};

export default Field;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

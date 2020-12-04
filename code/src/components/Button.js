import React from 'react';
import styled from 'styled-components';

const Button = ({ button, click, disabled, text, className }) => {
  return (
    <CustomButton
      type={button}
      onClick={click}
      disabled={disabled}
      className={className}
    >
      {text}
    </CustomButton>
  );
};
export default Button;

const CustomButton = styled.button`
  font-size: 13px;
  padding: 6px;
`;
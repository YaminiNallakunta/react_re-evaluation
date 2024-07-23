import React from 'react';
import styled from 'styled-components';

interface IconProps {
  src: string;
  alt: string;
}

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Icons: React.FC<IconProps> = ({ src, alt }) => (
  <StyledIcon src={src} alt={alt} />
);

export default Icons;

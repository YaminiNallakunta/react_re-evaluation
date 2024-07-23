import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  variant:   'subtitle1' | 'subtitle2'|'body1' |'h1';
  color?: string,
}

const StyledText = styled.div<{ variant: 'subtitle1' | 'subtitle2' | 'body1' |'h1' }>`
  font-size: ${({ variant }) => 
    variant === 'subtitle1' ? '1.25rem' : 
    variant === 'subtitle2' ? '1rem' : 
    '0.875rem'};
`;

const Text: React.FC<TextProps> = ({ children, variant,color }) => (
  <StyledText variant={variant} color={color}>{children}</StyledText>
);

export default Text;

import React from 'react';
import styled from 'styled-components';

interface PriceProps {
  amount: string;
}

const StyledPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Price: React.FC<PriceProps> = ({ amount = "N/A" }) => (
  <StyledPrice>{amount}</StyledPrice>
);

export default Price;


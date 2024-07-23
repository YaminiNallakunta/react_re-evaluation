import React from 'react';
import styled from 'styled-components';
import Icons from '../../atoms/Icons/Icons';
import Text from '../../atoms/Text/Text';
import Price from '../../atoms/Price/Price';
import Stack from '@mui/material/Stack';

interface PriceCorrelationItemProps {
  icon: string;
  name: string;
  amount: string;
  correlation: string;
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Correlation = styled.div`
  text-align: right;
`;

const PriceCorrelationItem: React.FC<PriceCorrelationItemProps> = ({ icon, name, amount, correlation }) => (
  <ItemContainer>
    <ItemInfo>
      <Icons src={icon} alt={name} />
      <Stack>
        <Text variant="body1">{name}</Text>
        <Text variant="body1">Moves tightly together</Text>
      </Stack>
    </ItemInfo>
    <Correlation>
      <Price amount={amount} />
      <Text variant="body1">{correlation}</Text>
    </Correlation>
  </ItemContainer>
);

export default PriceCorrelationItem;

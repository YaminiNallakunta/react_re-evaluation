import React from 'react';
import styled from 'styled-components';
import PriceCorrelationItem from '../../molecules/PriceCorrelation/PriceCorrelation';
import {ITEMS} from '../../../utils/constants/constants';
import Text from '../../atoms/Text/Text';

const ListContainer = styled.div`
  width: 40%;
  max-height:312;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  
`;


const PriceCorrelationList: React.FC = () => (
  <ListContainer>
    <Text variant="subtitle1" color="primary">Price correlation with</Text>
    {ITEMS.map(ITEMS => (
      <PriceCorrelationItem
        key={ITEMS.name}
        icon={ITEMS.icon}
        name={ITEMS.name}
        amount={ITEMS.amount}
        correlation={ITEMS.correlation}
      />
    ))}
  </ListContainer>
);

export default PriceCorrelationList;

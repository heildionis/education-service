import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type RowPros = Omit<FlexProps, 'direction'>

export const Row: FC<RowPros> = (props) => (
    <Flex {...props} direction='row' />
);

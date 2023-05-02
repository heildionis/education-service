import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type ColumnPros = Omit<FlexProps, 'direction'>

export const Column: FC<ColumnPros> = (props) => (
    <Flex {...props} direction='column' />
);

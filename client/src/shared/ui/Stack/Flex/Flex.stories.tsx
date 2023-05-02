import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    args: {
        children: (
            <>
                <div> element </div>
                <div> element </div>
                <div> element </div>
                <div> element </div>
            </>
        ),
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
};

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
};

export const RowAlignStart = Template.bind({});
RowAlignStart.args = {
    direction: 'row',
    align: 'start',
};

export const RowAlignCenter = Template.bind({});
RowAlignCenter.args = {
    direction: 'row',
    align: 'center',
};

export const RowAlignEnd = Template.bind({});
RowAlignEnd.args = {
    direction: 'row',
    align: 'end',
};

export const RowJustifyStart = Template.bind({});
RowJustifyStart.args = {
    direction: 'row',
    justify: 'start',
};

export const RowJustifyCenter = Template.bind({});
RowJustifyCenter.args = {
    direction: 'row',
    justify: 'center',
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
    direction: 'row',
    justify: 'end',
};

export const RowJustifyBetween = Template.bind({});
RowJustifyBetween.args = {
    direction: 'row',
    justify: 'between',
};

export const RowJustifyAround = Template.bind({});
RowJustifyAround.args = {
    direction: 'row',
    justify: 'around',
};

export const RowGap2 = Template.bind({});
RowGap2.args = {
    direction: 'row',
    gap: '2',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    direction: 'row',
    gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    direction: 'row',
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    direction: 'row',
    gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    direction: 'row',
    gap: '32',
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    direction: 'row',
    align: 'start',
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: 'row',
    align: 'center',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'row',
    align: 'end',
};

export const ColumnJustifyStart = Template.bind({});
ColumnJustifyStart.args = {
    direction: 'row',
    justify: 'start',
};

export const ColumnJustifyCenter = Template.bind({});
ColumnJustifyCenter.args = {
    direction: 'row',
    justify: 'center',
};

export const ColumnJustifyEnd = Template.bind({});
ColumnJustifyEnd.args = {
    direction: 'row',
    justify: 'end',
};

export const ColumnJustifyBetween = Template.bind({});
ColumnJustifyBetween.args = {
    direction: 'row',
    justify: 'between',
};

export const ColumnJustifyAround = Template.bind({});
ColumnJustifyAround.args = {
    direction: 'row',
    justify: 'around',
};

export const ColumnGap2 = Template.bind({});
ColumnGap2.args = {
    direction: 'column',
    gap: '2',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    gap: '4',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
};

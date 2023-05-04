import { memo } from 'react';

/**
 * How to use:
 *
 * interface ComponentProps<T> {
 *  genericeValue: T;
 * }
 *
 * export const Component = typedMemo(<T extends string>(props: ComponentProps<T>) => {
 *  const { genericValue } = props;
 *
 *  console.log(typeof genericValue) // T
 * }
*/
export const typedMemo: <T>(c: T) => T = memo;

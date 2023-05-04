import { FC, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthInputType } from '../../model/types/input';

import cls from './AuthCard.module.scss';

import { typedMemo } from '@/shared/constants/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Input } from '@/shared/ui/Input/Input';
import { Column } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface AuthCardProps<T> {
    className?: string;
    AuthIcon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    inputs: AuthInputType<T>[];
    authButtonTitle: string;
    onAuthClick: () => void;
}

export const AuthCard = typedMemo(<T extends string>(props: AuthCardProps<T>) => {
    const {
        className, AuthIcon, title, onAuthClick, authButtonTitle, inputs,
    } = props;
    const { t } = useTranslation();

    return (
        <>
            <Card variant='secondary' className={cls.card}>
                <Column gap='16'>
                    <Icon Svg={AuthIcon} variant='soft' />
                    <Typography
                        className={cls.title}
                        color='soft'
                        align='center'
                        variant='h5'
                    >
                        {title}
                    </Typography>
                </Column>
            </Card>
            <Column gap='16' className={classNames(cls.form, {}, [className])} fullWidth>
                {inputs.map(({
                    label,
                    onChange,
                    type,
                    placeholder,
                    value,
                }) => (
                    <Column key={label} fullWidth align='start' gap='2'>
                        <Typography
                            color='disabled'
                            variant='h5'
                        >
                            {label}
                        </Typography>
                        <Input
                            fullWidth
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    </Column>
                ))}
                <Button
                    fullWidth
                    type='button'
                    onClick={onAuthClick}
                >
                    {authButtonTitle}
                </Button>
                <Typography
                    align='center'
                    className={cls.privacy}
                    color='disabled'
                    variant='h6'
                >
                    {t(`Нажимая кнопку ${authButtonTitle} вы принимаете`)}
                    <AppLink to='/'>
                        {' '}
                        {t('пользовательское соглашение')}
                    </AppLink>
                </Typography>
            </Column>
        </>
    );
});

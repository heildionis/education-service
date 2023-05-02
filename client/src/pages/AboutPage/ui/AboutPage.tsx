import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './AboutPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AboutPageProps {
   className?: string;
}

const AboutPage: FC<AboutPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('about');

    return (
        <Page className={classNames(cls.aboutPage, {}, [className])}>
            {t('О нас')}
        </Page>
    );
});

export default AboutPage;

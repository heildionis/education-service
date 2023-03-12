import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage: FC<AboutPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.aboutPage, {}, [className])}>
            {t('О нас')}
        </div>
    );
});

export default AboutPage;

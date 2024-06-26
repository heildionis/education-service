import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ProfilePage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
   className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    return (
        <Page className={classNames(cls.profilePage, {}, [className])}>
            {t('Страница профиля')}
        </Page>
    );
});

export default ProfilePage;

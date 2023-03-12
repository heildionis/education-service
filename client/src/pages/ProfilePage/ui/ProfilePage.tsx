import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
   className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profilePage, {}, [className])}>
            {t('Страница профиля')}
        </div>
    );
});

export default ProfilePage;

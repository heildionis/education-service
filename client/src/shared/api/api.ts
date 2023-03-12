import axios from 'axios';
import { LOCAL_STORAGE_ACCESS_TOKEN } from 'shared/constants/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

$api.interceptors.response.use(
    (config) => config,

    async (error) => {
        const originalRequest = error.config;

        const isStatusUnauthorized = error.response.status === 401;
        const isSameRequest = originalRequest;
        const isRetry = error.config._isRetry;

        if (isStatusUnauthorized && isSameRequest && !isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get('/refresh', { withCredentials: true });
                const { accessToken } = response.data;

                localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);

                return $api.request(originalRequest);
            } catch (e) {
                console.log('Unauthorized!!!!!');
            }
        }
        throw error;
    },
);

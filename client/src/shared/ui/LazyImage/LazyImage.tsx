import {
    FC, ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const LazyImage: FC<LazyImageProps> = memo((props: LazyImageProps) => {
    const {
        className,
        src,
        alt,
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';

        image.onload = () => {
            setIsLoading(false);
        };

        image.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});

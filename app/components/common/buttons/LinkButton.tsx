'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/app/theming/ThemeProvider';
import { Link as SanityLink } from '@/sanity.types';
import { linkResolver } from '@/sanity/lib/utils';
import { useRouter } from 'next/navigation';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: SanityLink;
}

export const LinkButton = ({
    children,
    className = '',
    size = 'medium',
    fullWidth = false,
    ...props
}: SecondaryButtonProps) => {
    const router = useRouter();
    const buttonUrl =
        (props.href?.linkType == 'href'
            ? linkResolver(props.href) || '/'
            : props.href?.linkType == 'slug'
                ? props.href?.slug?.includes('/')
                    ? props.href?.slug
                    : '/' + props.href?.slug
                : props.href) || '/';


    const buttonClassName = [
        'bg-transparent',
        'font-[\'DM Sans\'],sans-serif',
        'font-semibold',
        'text-[#3116c8]',
        'text-[16px]',
        'leading-[18px]',
        'flex',
        'items-center',
        'justify-center',
        'gap-2.5',
        'relative',
        'transition-all',
        'duration-200',
        'hover:underline',
        fullWidth ? 'w-full' : 'w-auto',
        className,
    ].join(' ');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.href && !props.onClick) {
            e.preventDefault();
            router.push(buttonUrl as string);
        }
        props.onClick?.(e);
    };

    return (
        <button
            className={buttonClassName}
            {...props}
            onClick={handleClick}
            type={props.type || 'button'}
        >
            {props.href ? <Link href={buttonUrl} className={buttonClassName}>{children}</Link> : children}
        </button>
    );
};

export default LinkButton;

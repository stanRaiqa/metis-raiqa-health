"use client";
import React, {ButtonHTMLAttributes, ReactNode} from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import {Link as SanityLink} from "@/sanity.types";
import Link from "next/link";
import {useTheme} from "@/app/theming/ThemeProvider";
import {linkResolver} from "@/sanity/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: SanityLink;
}

export default function NewPrimaryButton({
                                            children,
                                            className = '',
                                            size = 'medium',
                                            fullWidth = false,
                                            ...props
                                        }: PrimaryButtonProps) {
    const { currentTheme } = useTheme();
    const primaryButtonUrl = linkResolver(props.href) || '/';
    return (
        <div className="m-40 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white font-neulis-sans text-black dark:text-white flex items-center space-x-2"
            >
                <Link href={primaryButtonUrl} >
                    {children}
                </Link>
            </HoverBorderGradient>
        </div>
    );
}


import React from 'react';
import { useTheme } from "../../theming/ThemeProvider";

interface ComingSoonBadgeProps {
    className?: string;
}

const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({ className = '' }) => {
    const { currentTheme } = useTheme();
    const healthPurple600 = currentTheme["brand colors"]?.health?.Blue?.["600"] || "#3116C8";

    return (
        <div 
            className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md transform z-20 ${className}`}
            style={{ backgroundColor: healthPurple600 }}
        >
            Coming Soon
        </div>
    );
};

export default ComingSoonBadge; 
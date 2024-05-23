"use client";

import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

interface DrawerPropsType extends ComponentPropsWithoutRef<"div"> {
    open?: boolean;
    onClose?: () => void;
}

export const Drawer: React.FC<DrawerPropsType> = ({
    open,
    onClose = () => {},
    className,
    children,
    ...rest
}) => {
    return (
        <div
            className={cn("fixed top-0 left-0 h-screen w-full bg-black/50", {
                hidden: !open,
            })}
            onClick={onClose}
        >
            <div
                className={cn(
                    "max-w-[350px] w-full bg-white absolute right-0 top-0 h-screen",
                    className
                )}
                {...rest}
            >
                {children}
            </div>
        </div>
    );
};

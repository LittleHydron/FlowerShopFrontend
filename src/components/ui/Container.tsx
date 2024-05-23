import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

interface ContainerPropsType extends ComponentPropsWithoutRef<"div"> {}

export const Container: React.FC<ContainerPropsType> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <div
            className={cn("max-w-[1600px] w-full px-4 mx-auto", className)}
            {...rest}
        >
            {children}
        </div>
    );
};

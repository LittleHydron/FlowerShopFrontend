import { ComponentPropsWithoutRef } from "react";
import { Card, CardPropsType } from "./Card";
import { cn } from "@/lib/cn";

export interface CardListPropsType extends ComponentPropsWithoutRef<"div"> {
    items: CardPropsType[];
}

export const CardList: React.FC<CardListPropsType> = ({
    items,
    className,
    ...rest
}) => {
    return (
        <div className={cn("flex justify-center gap-4", className)} {...rest}>
            {items?.map((item) => (
                <Card {...item} key={item.id} />
            ))}
        </div>
    );
};

import { cn } from "@/lib/cn";
import { CardListPropsType } from "./CardList";
import { CardSpecial } from "./CardSpecial";

export const CardSpecialList: React.FC<CardListPropsType> = ({
    items,
    className,
    ...rest
}) => {
    return (
        <div className={cn("flex justify-center gap-4", className)} {...rest}>
            {items?.map((item) => (
                <CardSpecial {...item} key={item.id} />
            ))}
        </div>
    );
};

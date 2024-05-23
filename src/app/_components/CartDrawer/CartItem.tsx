import { TrashIcon } from "@/components/icons/Trash";

interface CartItemPropsType {}

export const CartItem = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex flex-col gap-4">
                <p className="font-medium text-[20px]">Букет “Назва”</p>
                <p className="text-sm font-medium">1 X 4000 = 4000 грн</p>
                <p className="text-sm font-medium">Додаткові опції</p>
                <p className="text-sm font-medium">Упаковка</p>
                <p className="text-sm font-medium">Доставка</p>
            </div>
            <div>
                <button>
                    <TrashIcon width={24} height={28} />
                </button>
            </div>
        </div>
    );
};

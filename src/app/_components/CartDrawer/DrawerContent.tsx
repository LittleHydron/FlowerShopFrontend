import Image from "next/image";
import { Drawer } from "./Drawer";
import CartLogo from "@public/cartLogo.png";
import Avatar from "@public/avatar.png";
import { CardSwitch } from "../../profile/_components/CardSwitch";
import { CartItem } from "./CartItem";

interface DrawerContentPropsType {
    open?: boolean;
    onClose?: () => void;
}

export const DrawerContent: React.FC<DrawerContentPropsType> = ({
    open,
    onClose,
}) => {
    return (
        <Drawer open={open}>
            <div className="pt-10 px-8">
                <div className="flex justify-center">
                    <Image src={CartLogo} alt="Cart" width={100} height={100} />
                </div>
                <div className="flex justify-center items-center gap-4 mt-8">
                    <Image src={Avatar} alt="Avatar" width={30} height={30} />
                    <p className="text-[20px] font-medium">Yuliia Hryn</p>
                </div>
                <div className="mt-4">
                    <CardSwitch defaultValue="some value" />
                </div>
                <div className="mt-10">
                    <CartItem />
                </div>
            </div>
        </Drawer>
    );
};

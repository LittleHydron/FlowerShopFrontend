"use client";

import { Container } from "@/components/ui/Container";
import { playfairClassname } from "@/fonts/fonts";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Avatar from "@public/avatar.png";
import { CardSwitch } from "./_components/CardSwitch";
import { useAuthStore } from "@/model/userStore";
import { useEffect, useState } from "react";
import { userService } from "@/services/user.service";

const ProfilePage = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const [userData, setUserData] = useState<{
        name: string;
        surname: string;
        cardType: string;
    }>({
        name: "",
        surname: "",
        cardType: "",
    });

    useEffect(() => {
        if (accessToken) {
            userService.getUserData(accessToken).then((data) => {
                setUserData({
                    name: data.name,
                    surname: data.surname,
                    cardType: data.cardType.cardType,
                });
            });
        }
    }, [accessToken]);

    console.log(userData, "adasd");

    // {name} {surname}
    return (
        <Container className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-[900px]">
                <p className={cn(playfairClassname, "text-[25px]")}>
                    Кабінет користувача
                </p>
            </div>
            <div className="max-w-[900px] w-full border-[#D9D9D9] border flex justify-center mt-4 py-8">
                <div className="max-w-[560px] w-full">
                    <div className="flex items-center gap-4 mt-8 pb-4 mb-6 ml-4">
                        <Image
                            src={Avatar}
                            alt="Avatar"
                            width={50}
                            height={50}
                        />
                        <p className="text-[20px] font-medium">
                            {userData.name} {userData.surname}
                        </p>
                    </div>
                    <div className="flex justify-between items-center border-y-[#D9D9D9] border-y py-4">
                        <p className="font-medium">Ім&apos;я</p>
                        <p className="font-medium text-[#717171]">
                            {userData.name}
                        </p>
                    </div>
                    <div className="flex justify-between items-center border-b-[#D9D9D9] border-b py-4">
                        <p className="font-medium">Прізвище</p>
                        <p className="font-medium text-[#717171]">
                            {userData.surname}
                        </p>
                    </div>
                    <div className="mt-4">
                        <CardSwitch defaultValue={userData.cardType} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;

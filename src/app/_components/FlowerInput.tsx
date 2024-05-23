import { ChangeEvent } from "react";

interface FlowerInputPropsType {
    name: string;
    key: string;
    onChange: (val: number, key: string) => void;
}

export const FlowerInput: React.FC<FlowerInputPropsType> = ({
    name,
    key,
    onChange,
}) => {
    return (
        <div className="w-[200px] p-4 border rounded-2xl border-black">
            <p className="text-center w-full">{name}</p>
            <div className="w-full flex gap-1 mt-2">
                <p className="shrink-0">К-сть:</p>
                <div className="flex-1">
                    <input
                        className="w-full border border-black"
                        type="text"
                        pattern="\d*"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onChange(Number(e.target.value), key)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

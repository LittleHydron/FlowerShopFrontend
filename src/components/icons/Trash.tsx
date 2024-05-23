import { IconPropsType } from "@/types/IconProps.type";

export const TrashIcon: React.FC<IconPropsType> = ({
    width = "48",
    height = "54",
    color = "none",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.6665 24.3333V40.3333"
                stroke="#303037"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M29.333 24.3333V40.3333"
                stroke="#303037"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M2.6665 13.6667H45.3332"
                stroke="#303037"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 13.6667H24H40V43C40 47.4184 36.4184 51 32 51H16C11.5817 51 8 47.4184 8 43V13.6667Z"
                stroke="#303037"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 8.33333C16 5.38781 18.3878 3 21.3333 3H26.6667C29.6123 3 32 5.38781 32 8.33333V13.6667H16V8.33333Z"
                stroke="#303037"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

import {
    Montserrat,
    Roboto,
    Montserrat_Alternates,
    Playfair_Display,
} from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] });

export const montserratClassname = montserrat.className;
export const playfairClassname = playfair.className;

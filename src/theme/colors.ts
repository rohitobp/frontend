export interface ColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    [key: string]: string;
}

export const DarkPalette: ColorPalette = {
    primary: '#FFD700', // Bright yellow for contrast and highlight
    secondary: '#FFFFFF', // White for key contrasting elements
    accent: '#C5C500', // Darker muted yellow for accents
    background: '#000000', // Black for the background
    text: '#FFD700', // Yellow text for readability on dark background
    id: "DarkPalette",
};

export const LightPalette: ColorPalette = {
    primary: '#FFD700', // Bright yellow for primary elements
    secondary: '#000000', // Black for a strong contrast
    accent: '#FFF8DC', // Lighter yellow for accents (Cornsilk)
    background: '#FFFFFF', // White for the background
    text: '#000000', // Black text for high contrast
    id: "LightPalette",
};

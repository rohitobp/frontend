export interface ColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    [key: string]: string;
}

export const DarkPalette: ColorPalette = {
    primary: '#f7da3b', // Bright yellow for contrast and highlight
    secondary: '#FFFFFF', // White for key contrasting elements
    focus: '#fad300',
    accent: '#C5C500', // Darker muted yellow for accents
    background: '#000000', // Black for the background
    text: 'white', // Yellow text for readability on dark background
    id: "DarkPalette",
};

export const LightPalette: ColorPalette = {
    primary: '#f7da3b', // Bright yellow for primary elements
    secondary: '#000000', // Black for a strong contrast
    focus: '#fad300',
    accent: '#FFF8DC', // Lighter yellow for accents (Cornsilk)
    background: '#FFFFFF', // White for the background
    text: '#000000', // Black text for high contrast
    id: "LightPalette",
};

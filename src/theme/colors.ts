export interface ColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    [key: string]: string;
}

export const palette1: ColorPalette = {
    primary: '#1E90FF',
    secondary: '#FF6347',
    accent: '#32CD32',
    background: '#FFFFFF',
    text: '#000000',
};

export const palette2: ColorPalette = {
    primary: '#8A2BE2',
    secondary: '#FF4500',
    accent: '#7FFF00',
    background: '#F0F8FF',
    text: '#2F4F4F',
};

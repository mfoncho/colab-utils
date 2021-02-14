declare module "@material-ui/core/styles/createPalette" {

    interface PaletteHues {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
    }

    interface PaletteColor extends PaletteHues {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    }

    interface IPalettes {
        red: PaletteHues;
        blue: PaletteHues;
        grey: PaletteHues;
        pink: PaletteHues;
        teal: PaletteHues;
        brown: PaletteHues;
        green: PaletteHues;
        amber: PaletteHues;
        yellow: PaletteHues;
        orange: PaletteHues;
        purple: PaletteHues;
        indigo: PaletteHues;
        bluegrey: PaletteHues;
        dpurple: PaletteHues;
        dorange: PaletteHues;
        success: PaletteColorOptions;
        warning: PaletteColorOptions;
    }
}


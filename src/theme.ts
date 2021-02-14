import merge from "lodash/merge";
import clone from 'lodash/cloneDeep';
import {
    ClassNameMap,
    Styles,
    WithStylesOptions,
} from "@material-ui/styles/withStyles";
//** Re-exporting so don't have to deal with typescript dependency depth (protable code) bug */
export {
    ClassNameMap,
    Styles,
    WithStylesOptions,
} from "@material-ui/styles/withStyles";
import {
    makeStyles as baseMakeStyles,
    useTheme as baseUseThemeHook,
    Theme as BaseTheme,
} from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import colors from "./colors";

export const hexToRgba = (hex: any, opacity = 0.0) => {
    let chex = hex.charAt(0) === "#" ? hex.substring(1, 7) : hex;
    let R = parseInt(chex.substring(0, 2), 16);
    let G = parseInt(chex.substring(2, 4), 16);
    let B = parseInt(chex.substring(4, 6), 16);
    return `rgba(${R},${G},${B},${opacity})`;
};

export const background = {
    light: {
        paper: "#ffffff",
        default: "#fafafa",
    },
    dark: {
        paper: "#15191E",
        default: "#20262B",
    },
};

const root = {

    background,

    palette: {
        ...colors,
        primary: colors.indigo,
        secondary: colors.red,
    },

    utils: {
        hexToRgba,
    },

    typography: {
        useNextVariants: true,
        fontFamily: [
            `"Lato"`,
            "Roboto",
            '"Helvetica Neue"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),

        subtitle2: {
            fontWeight: 700,
            fontSize: "0.884rem",
        },
    },

    shape: {
        borderRadius: 10,
    },
};

const base = {
    ...root,
    palette: {
        ...root.palette,
        background: background.light,
    },
};

export type Theme = BaseTheme & typeof base;

export type BaseMakeStylesT = typeof baseMakeStyles;

export type BaseMakeStylesArgsT = Parameters<BaseMakeStylesT>;

export const useTheme: () => Theme = baseUseThemeHook;

export type StylesCreatorT = (theme: Theme) => object;

export function makeStyles<
    STheme = Theme,
    Props extends object = {},
    ClassKey extends string = string
>(
    styles: Styles<STheme, Props, ClassKey>,
    options?: Omit<WithStylesOptions<STheme>, "withTheme">
): keyof Props extends never // `makeStyles` where the passed `styles` do not depend on props
    ? (props?: any) => ClassNameMap<ClassKey> // `makeStyles` where the passed `styles` do depend on props
    : (props: Props) => ClassNameMap<ClassKey> {
    return baseMakeStyles(styles, options);
}

export function createTheme(theme: object, mode: "light" | "dark" = "light") {
    return responsiveFontSizes(
        createMuiTheme(
            merge(merge(clone(base), theme), {
                palette: {
                    type: mode,
                    background:  clone(background[mode])
                },
            })
        )
    ) as Theme;
}

export default createMuiTheme(base) as Theme;

    import { buildLegacyTheme } from "sanity";

    const props = {
        "--my-white": '#f3f3f3',
        "--my-black": '#2c2c2c',
        "--my-brand": '#ffa024',
        "--my-red": '#D13704',
        "--my-green": '#818E7B',
        "--my-yellow": '#E4CA60',
    }

    export const myTheme = buildLegacyTheme({
        "--gray-base": "#666",

        "--component-bg": props["--my-black"],
        "--component-text-color": props["--my-white"],

        /* BRAND COLORS */
        "--brand-primary": props["--my-brand"],

        /* DEFAULT BUTTON */
        "--default-button-color": "#666",
        "--default-button-primary-color": props["--my-brand"],
        "--default-button-success-color": props["--my-green"],
        "--default-button-danger-color": props["--my-red"],
        "--default-button-warning-color": props["--my-yellow"],

        /* STATE */

        "--state-success-color": props["--my-green"],
        "--state-danger-color": props["--my-red"],
        "--state-warning-color": props["--my-yellow"],
        "--state-info-color": props["--my-brand"],

        /* NAVBAR */
        "--main-navigation-color": props["--my-black"],
        "--main-navigation-color--inverted": props["--my-white"],

        "--focus-color": props["--my-brand"],

    })
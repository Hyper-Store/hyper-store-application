import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        border_raidus: string,
        colors: {
            primary: string,
            secondary: string,
            white: string,
            red: string,
            red_50: string,
            green: string,
            purple: string,
            black: string,
            yellow: string,
            orange: string,
            gray_200: string,
        },
        texts: {
            title: string,
            subtitle: string,
            description: string,
            price: string,
            subprice: string
        },
        bagdge: {
            yellow: {
                color: string,
                background: string
            }
        },
        backgrounds: {
            bgPrimary: string,
            bgSecondary: string,
            bgDark: string,
        },
        dropshadows: {
            secondary: string
        },
        borders: {
            primary: {
                color: string,
                hover: string
            }
            secondary: {
                color: string,
                hover: string
            }
        },
        fonts: {},
        buttons: {
            primary: {
                color: string,
                background: string,
                hover: {
                    background: string
                }
            },
            outline: {
                color: string,
                borderColor: string
                hover: {
                    color: string,
                    borderColor: string
                }
            },
            primaryDark: {
                color: string,
                background: string,
                hover: {
                    background: string
                }
            },
            danger: {
                color: string,
                background: string,
                hover: {
                    background: string
                }
            }
        },
        icons: {
            theme: {
                color: string
            }
        }
    }
}
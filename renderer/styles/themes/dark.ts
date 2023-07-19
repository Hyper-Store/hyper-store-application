import { DefaultTheme } from 'styled-components';

export default {
    title: 'dark',
    border_raidus: '8px',
    colors: {
        primary: '#42FDA3',
        secondary: '#4EA8DE',
        white: '#fff',
        red: '#ff0000',
        red_50: '#310000',
        green: '#00ff00',
        purple: '#6a3ce2',
        black: '#000',
        yellow: '#e1b538',
        orange: '#ff5e00',
    },
    backgrounds: {
        bgPrimary: '#121214',
        bgSecondary: '#1F1F21',
        bgDark: '#0D0D0F',
    },
    dropshadows: {
        secondary: "#0404051a"
    },
    bagdge: {
        yellow: {
            color: '#e1b538',
            background: '#423a1b75'
        },
    },
    borders: {
        primary: {
            color: '#2D2D2F',
            hover: '#2D2D2F'
        },
        secondary: {
            color: '#272729',
            hover: '#2D2D2F'
        }
    },
    texts: {
        title: '#fafafa',
        subtitle: '#C4C4C4',
        description: '#A1A1A1',
        price: '#e9e9e9',
        subprice: '#A1A1A1'
    },
    fonts: {},
    buttons: {
        primary: {
            color: '#000',
            background: '#42FDA3',
            hover: {
                background: '#55FFB6'
            }
        },
        outline: {
            color: "#999",
            borderColor: "#ffffff1a",
            hover: {
                color: "#ddd",
                borderColor: "#ffffff33"
            }
        },
        primaryDark: {
            color: '#a3a3a3',
            background: '#2E2E30',
            hover: {
                background: '#363638'
            }
        },
        danger: {
            color: '#fff',
            background: '#FF4545',
            hover: {
                background: '#FF5F5F'
            }
        }
    },
    icons: {
        theme: {
            color: "#f4f4f5"
        }
    }
} as DefaultTheme
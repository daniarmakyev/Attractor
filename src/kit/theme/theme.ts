import { lightPreset } from './light-theme';
import { darkPreset } from './dark-theme';

type ThemeName = 'light' | 'dark';

export const themes = {
    light: lightPreset,
    dark: darkPreset,
};

export const getThemeCss = (): string => {
    const variables = Object.entries(themes)
        .map(([name, theme]) => {
            const cssVars = Object.entries(theme.colors)
                .map(([key, value]) => `--theme-color-${key}: ${value}`)
                .join('; ');
            return name === 'light'
                ? `:root { ${cssVars} }`
                : `:root[data-theme="${name}"] { ${cssVars} }`;
        })
        .join('\n');
    return variables;
};

export const setTheme = (name: ThemeName) => {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('theme', name);
};

export const getTheme = (): ThemeName => {
    return (localStorage.getItem('theme') as ThemeName) || 'light';
};

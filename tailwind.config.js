/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-error": "#ffffff",
        "on-tertiary-fixed-variant": "#4b463c",
        "on-surface": "#211a17",
        "on-tertiary-fixed": "#1e1b13",
        "surface-tint": "#77574d",
        "secondary-fixed": "#feddb3",
        "inverse-on-surface": "#fdeee8",
        "surface-container": "#faebe6",
        "on-secondary-fixed-variant": "#584324",
        "secondary-fixed-dim": "#e1c299",
        "on-secondary-container": "#765f3d",
        "tertiary": "#343127",
        "surface-container-high": "#f4e5e0",
        "surface-container-highest": "#eedfda",
        "outline": "#827470",
        "on-primary-fixed-variant": "#5d4037",
        "primary-fixed-dim": "#e7bdb1",
        "on-tertiary-container": "#bcb5a8",
        "on-background": "#211a17",
        "tertiary-fixed-dim": "#cdc6b8",
        "on-surface-variant": "#504441",
        "on-primary": "#ffffff",
        "primary-container": "#5d4037",
        "on-primary-container": "#d4ada1",
        "on-error-container": "#93000a",
        "primary-fixed": "#ffdbd0",
        "on-secondary": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#fbdbb0",
        "background": "#fff8f6",
        "inverse-surface": "#372f2b",
        "on-primary-fixed": "#2c160e",
        "on-tertiary": "#ffffff",
        "surface": "#fff8f6",
        "surface-dim": "#e6d7d2",
        "outline-variant": "#d4c3be",
        "secondary": "#725a39",
        "tertiary-container": "#4b473c",
        "surface-bright": "#fff8f6",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#e9e2d3",
        "inverse-primary": "#e7bdb1",
        "surface-container-low": "#fff1ec",
        "on-secondary-fixed": "#281801",
        "surface-variant": "#eedfda",
        "primary": "#442a22"
      },
      "borderRadius": {
        "DEFAULT": "0.5rem",
        "sm": "0.25rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      "spacing": {
        "container-max": "1200px",
        "gutter": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "unit": "8px"
      },
      "fontFamily": {
        "h1": ["Epilogue", "sans-serif"],
        "h2": ["Epilogue", "sans-serif"],
        "h3": ["Epilogue", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"]
      },
      "fontSize": {
        "h1": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "h2": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "h3": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-sm": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }]
      },
      "boxShadow": {
        "soft": "0 8px 32px 0 rgba(93, 64, 55, 0.08)"
      }
    },
  },
  plugins: [],
}

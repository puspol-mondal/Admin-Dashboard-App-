import { createContext, useMemo, useState } from "react";

import { createTheme } from "@mui/material/styles";
import { indigo, red } from "@mui/material/colors";

//color design tokens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#141b2d",
          600: "#101624",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        },
        blueAccent: {
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1a237e",
        },
      }
    : {
        grey: {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9e9e9e",
          400: "#bdbdbd",
          300: "#e0e0e0",
          200: "#eeeeee",
          100: "#f5f5f5",
        },
        primary: {
          900: "#040509",
          800: "#080b12",
          700: "#0c101b",
          600: "#101624",
          500: "#141b2d",
          400: "#434957",
          300: "#727681",
          200: "#a1a4ab",
          100: "#d0d1d5",
        },
        greenAccent: {
          900: "#0f2922",
          800: "#1e5245",
          700: "#2e7c67",
          600: "#101624",
          500: "#141b2d",
          400: "#70d8bd",
          300: "#94e2cd",
          200: "#b7ebde",
          100: "#dbf5ee",
        },
        redAccent: {
          900: "#b71c1c",
          800: "#c62828",
          700: "#d32f2f",
          600: "#e53935",
          500: "#f44336",
          400: "#ef5350",
          300: "#e57373",
          200: "#ef9a9a",
          100: "#ffcdd2",
        },
        blueAccent: {
          900: "#1a237e",
          800: "#283593",
          700: "#303f9f",
          600: "#3949ab",
          500: "#3f51b5",
          400: "#5c6bc0",
          300: "#7986cb",
          200: "#9fa8da",
          100: "#c5cae9",
        },
      }),
});

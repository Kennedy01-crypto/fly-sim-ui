import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Google Flights Color System */
        google: {
          blue: "hsl(var(--google-blue))",
          "blue-dark": "hsl(var(--google-blue-dark))",
          "blue-light": "hsl(var(--google-blue-light))",
          green: "hsl(var(--google-green))",
          red: "hsl(var(--google-red))",
          yellow: "hsl(var(--google-yellow))",
        },
        
        /* Base System */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Text Colors */
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          inverse: "hsl(var(--text-inverse))",
        },
        
        /* Surface Colors */
        surface: {
          DEFAULT: "hsl(var(--surface))",
          container: "hsl(var(--surface-container))",
          "container-low": "hsl(var(--surface-container-low))",
          "container-high": "hsl(var(--surface-container-high))",
        },
        
        /* Primary System */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        
        /* Secondary System */
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        
        /* Interactive States */
        hover: "hsl(var(--hover))",
        selected: "hsl(var(--selected))",
        
        /* Border and Input */
        border: {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          border: "hsl(var(--input-border))",
          "border-focus": "hsl(var(--input-border-focus))",
        },
        
        /* Flight Specific */
        flight: {
          card: "hsl(var(--flight-card))",
          price: "hsl(var(--flight-price))",
          emission: "hsl(var(--flight-emission))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        DEFAULT: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius-sm)",
      },
      
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

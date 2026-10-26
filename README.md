# 🔐 Password Generator & Strength Checker

A client-side web app that **generates strong passwords** and **rates the strength** of any password as you type. I built it for my client-side programming class.

## Features

- **Generate a secure password**: 16 random characters mixing uppercase and lowercase letters, numbers and symbols
- **Live strength check**: the level updates on every keystroke, shown as **Weak / Medium / Strong** with a coloured progress bar
- **Show / hide** button for the password field

## How the strength is rated

You get one point for each of these:

| Rule | Point |
|---|---|
| At least 8 characters | +1 |
| At least 12 characters | +1 |
| Contains an uppercase letter | +1 |
| Contains a number | +1 |
| Contains a symbol | +1 |

- **Weak:** fewer than 8 characters, or 2 points or fewer
- **Medium:** 3–4 points
- **Strong:** all 5 points

## Built with

- Vanilla JavaScript (ES modules)
- CSS
- [Vite](https://vite.dev/)

## Run it locally

```bash
git clone https://github.com/jorgejszp-svg/password-generator_client-side-programming.git
cd password-generator_client-side-programming
npm install
npm run dev
```

Then open the URL that Vite prints (usually http://localhost:5173).

To make a production build, run `npm run build`.

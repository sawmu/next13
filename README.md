This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Installation Instructions for API Reference

```bash
npm install axios
# and
npm install swr
# prettier
npm install --save-dev prettier
```
## Create .prettierrc.json
```bash
{
    "singleQuote": false,
    "semi": true,
    "tabWidth": 4
}

# add scripts to package.json

"scripts": 
{
    "format": "prettier --check --ignore-path .gitignore .",
    "format:fix": "prettier --write --ignore-path .gitignore ."
},
```
## Setup .env
```bash
NEXT_PUBLIC_BACKEND_URL="https://localhost:8000"
```
## Create axios
```bash
import Axios from "axios";

const axios = Axios.create({ 
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
 });

 export default axios;
```


## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

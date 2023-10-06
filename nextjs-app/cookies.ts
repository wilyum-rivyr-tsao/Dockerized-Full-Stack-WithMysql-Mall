// file: utils/cookies.js

import Cookies from 'js-cookie';

export const setCookie = (name:string, value:string) => {
    Cookies.set(name, value, {
        expires: 1, // Cookie will expire in 1 day (adjust as needed)
        path: '/', // The cookie will be accessible from all pages
        secure: process.env.NODE_ENV === 'production', // Use secure flag in production
        sameSite: 'strict', // Set sameSite attribute to strict
    });
};

export const getCookie = (name:string) => {
    const cookie = Cookies.get(name);
    console.log('cookie', cookie)
    return cookie
};

export const removeCookie = (name:string) => {
    Cookies.remove(name, { path: '/' });
};
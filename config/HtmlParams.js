'use strict'

const pageName = 'Страница организации';
const charset  = 'UTF-8';
const lang     = 'ru';
const meta     = [
    {
        name: 'format-detection',
        content: 'telephone=no'

    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'

    },
    {
        name: 'theme-color',
        content: '#404040'

    },
    {
        name: 'msapplication-config',
        content: './img/favicon/windows_icons.xml'

    },
];
const links    = [
    {
        href: './img/favicon/androin_icons.json',
        rel: 'manifest'
    }
];
const favicons = [
    {
        href: './img/favicon/16.png',
        rel: 'icon',
        sizes: '16x16'
    },
    {
        href: './img/favicon/32.png',
        rel: 'icon',
        sizes: '32x32'
    },
    {
        href: './img/favicon/96.png',
        rel: 'icon',
        sizes: '96x96'
    },
    {
        href: './img/favicon/192.png',
        rel: 'icon',
        sizes: '192x192'
    },
    {
        href: './img/favicon/57.png',
        rel: 'apple-touch-icon',
        sizes: '57x57'
    },
    {
        href: './img/favicon/60.png',
        rel: 'apple-touch-icon',
        sizes: '60x60'
    },
    {
        href: './img/favicon/72.png',
        rel: 'apple-touch-icon',
        sizes: '72x72'
    },
    {
        href: './img/favicon/76.png',
        rel: 'apple-touch-icon',
        sizes: '76x76'
    },
    {
        href: './img/favicon/114.png',
        rel: 'apple-touch-icon',
        sizes: '114x114'
    },
    {
        href: './img/favicon/120.png',
        rel: 'apple-touch-icon',
        sizes: '120x120'
    },
    {
        href: './img/favicon/144.png',
        rel: 'apple-touch-icon',
        sizes: '144x144'
    },
    {
        href: './img/favicon/152.png',
        rel: 'apple-touch-icon',
        sizes: '152x152'
    },
    {
        href: './img/favicon/180.png',
        rel: 'apple-touch-icon',
        sizes: '180x180'
    }
];

exports.dev = {
    pageName : pageName,
    lang     : lang,
    charset  : charset,
    meta     : [],
    links    : [],
    favicons : []
};

exports.prod = {
    pageName : pageName,
    lang     : lang,
    charset  : charset,
    meta     : meta,
    links    : links,
    favicons : favicons
};
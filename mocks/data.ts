export const footerMenuItems = [
    {
        title: 'WEB MAP',
        links: [
            { text: 'Home', url: '#' },
            { text: 'Games', url: '#' },
            { text: 'News', url: '#' },
            { text: 'Math', url: '#' },
            { text: 'Company', url: '#' },
            { text: 'Events', url: '#' },
            { text: 'Partners', url: '#' },
        ],
    },
    {
        title: 'ABOUT US',
        links: [
            { text: 'Licensing', url: '#' },
            { text: 'Certification', url: '#' },
            { text: 'Responsible Gaming', url: '#' },
            { text: 'Exhibitions', url: '#' },
            { text: 'Copyright Protection', url: '#' },
            { text: 'Privacy Policy', url: '#' },
        ],
    },
    {
        title: 'EVENTS',
        links: [
            { text: 'PG ICE 2017', url: '#' },
            { text: 'PG ICE 2018', url: '#' },
            { text: 'PG ICE 2019', url: '#' },
            { text: 'About ICE', url: '#' },
        ],
    },
    {
        title: 'OUR PARTNERS',
        links: [
            { text: 'Relax Gaming', url: '#' },
            { text: 'Leander Games', url: '#' },
        ],
    },
]
export const headerMenuItems = [
    { text: 'Home', url: '#', active: false },
    { text: 'Games', url: '#', active: true },
    { text: 'News', url: '#', active: false },
    { text: 'Math', url: '#', active: false },
    { text: 'Company', url: '#', active: false },
    { text: 'Events', url: '#', active: false },
    { text: 'Partners', url: '#', active: false },
]
export const hotGames = [
    {
        banner: '/_nuxt/public/images/hot-game-1-banner.png',
        icon: '/_nuxt/public/images/hot-game-1-icon.png',
        title: 'Mahjong Ways',
        description: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…',
    },
    {
        banner: '/_nuxt/public/images/hot-game-2-banner.png',
        icon: '/_nuxt/public/images/hot-game-2-icon.png',
        title: 'Wild Bandito',
        description: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…',
    },
]
export const navItems = [
    {
        icon: '/_nuxt/public/icons/home.svg',
        text: 'Games Home',
        isActive: true,
    },
    {
        icon: '/_nuxt/public/icons/timeline.svg',
        text: 'Timeline',
        isActive: false,
    },
    {
        icon: '/_nuxt/public/icons/all.svg',
        text: 'All Games',
        isActive: false,
    },
]
export const mobileNavItems = [
    {
        icon: '/_nuxt/public/icons/home.svg',
        text: 'Home',
        isActive: true,
    },
    {
        icon: '/_nuxt/public/icons/timeline.svg',
        text: 'Timeline',
        isActive: false,
    },
    {
        icon: '/_nuxt/public/icons/all.svg',
        text: 'All Games',
        isActive: false,
    },
    {
        icon: '/_nuxt/public/icons/search.svg',
        text: 'Search',
        isActive: false,
    },
    {
        icon: '/_nuxt/public/icons/filter.svg',
        text: 'Filter',
        isActive: false,
    },
]
export const socialIcons = [
    { src: '/_nuxt/public/icons/twitter.svg', alt: 'Twitter' },
    { src: '/_nuxt/public/icons/youtube.svg', alt: 'YouTube' },
    { src: '/_nuxt/public/icons/linkedin.svg', alt: 'LinkedIn' },
]
export const breakpoints = {
    100: {
        itemsToShow: 1,
        snapAlign: 'start',
    },
    1020: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
}
export const categories = [
    {
        bgColor: '#5C6EFF',
        icon: '/_nuxt/public/icons/music.svg',
        title: 'Music',
        description: 'Music makes everything better, and these games will groove to it!',
        images: [
            '/_nuxt/public/images/category-1-icon-3.png',
            '/_nuxt/public/images/category-1-icon-4.png',
            '/_nuxt/public/images/category-1-icon-1.png',
            '/_nuxt/public/images/category-1-icon-2.png',
            '/_nuxt/public/images/category-1-big-icon-1.png',
        ],
    },
    {
        bgColor: '#19796A',
        icon: '/_nuxt/public/icons/poker.svg',
        title: 'Table Games',
        description: 'The classic table games for the gentlemen and ladies.',
        images: [
            '/_nuxt/public/images/category-2-icon-3.png',
            '/_nuxt/public/images/category-2-icon-4.png',
            '/_nuxt/public/images/category-2-icon-1.png',
            '/_nuxt/public/images/category-2-icon-2.png',
            '/_nuxt/public/images/category-2-big-icon-1.png',
        ],
    },
]

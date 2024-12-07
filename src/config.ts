import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Dev Seoyeon',
  subtitle: 'Blog',
  lang: 'ko',
  themeColor: {
    hue: 295,
    fixed: true,
  },
  banner: {
    enable: true,
    src: 'assets/images/wallpaper-light.webp',
    position: 'top',
    credit: {
      enable: false,
      text: '',
      url: ''
    }
  },
  toc: {
    enable: true,
    depth: 3
  },
  favicon: [
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'MythologyTeams',
      url: 'https://mythologyteams.com',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://avatars.githubusercontent.com/u/188960924?v=4',
  name: 'Seoyeon',
  bio: '응애응애 개발자',
  links: [
    // {
    //   name: 'Twitter',
    //   icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
    //                                     // You will need to install the corresponding icon set if it's not already included
    //                                     // `pnpm add @iconify-json/<icon-set-name>`
    //   url: 'https://twitter.com',
    // },
    // {
    //   name: 'Steam',
    //   icon: 'fa6-brands:steam',
    //   url: 'https://store.steampowered.com',
    // },
    {
      name: '',
      icon: 'fa6-solid:envelope',
      url: 'mailto:dev_seoyeon@mythologyteams.com',
    },
    {
      name: '',
      icon: 'fa6-brands:github',
      url: 'https://github.com/MythologyDevSeoyeon',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

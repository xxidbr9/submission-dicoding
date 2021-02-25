import LogoSvg from "../svg/bangkit_logo.svg"
import MsgIconSvg from '../svg/message-circle.svg'
import BellSvg from '../svg/bell.svg'
import MenuSvg from '../svg/align-justify.svg'
import ProfileImg from '../images/profile.jpg'
import SearchSvg from '../svg/search.svg';
import { GetId } from './helpers'

// Menu
const hamburger = GetId("navbar__menus_btn")
hamburger.innerHTML = `
<svg>
    <use xlink:href="${MenuSvg}" />
</svg>
`

// Logo Start
const logo = GetId("navbar__brand__logo")
logo.innerHTML = `
<svg>
    <use xlink:href="${LogoSvg}" />
</svg>
`;

// Search
const search = GetId("navbar__search__icon")
search.innerHTML = `
<svg>
    <use xlink:href="${SearchSvg}" />
</svg>
`;

// Msg Here
const msgMenu = GetId("navbar__menus__item__msg")
msgMenu.innerHTML = `
<svg>
    <use xlink:href="${MsgIconSvg}" />
</svg>
`;

const notifMenu = GetId("navbar__menus__item__notif")
notifMenu.innerHTML = `
<svg>
    <use xlink:href= "${BellSvg}" />
</svg>
`;

const profileMenu = GetId("navbar__menus__item__profile")
profileMenu.innerHTML = `
    <img src="./${ProfileImg}" />
`;
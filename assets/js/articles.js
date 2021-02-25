import MenuSvg from '../svg/more-horizontal.svg'
import ImageSvg from '../svg/image.svg'
import DataArticle from '../dummy/data.json'
import ProfileImg from '../images/profile.jpg'
import { GetId, changeTime } from './helpers'



// Foreach Article

let outHtml = "";
DataArticle.data.forEach(article => {
    outHtml += `
    <article class="article card spacing-y">
    <div class="article__head spacing-x">
        <div class="article__head__profile">
            <img src="${article.author_pic}" alt="" class="article__head__profile__pic">
            <div class="article__head__profile__group">
                <span class="article__head__profile__group__name">${article.author_name}</span>
                <span class="article__head__profile__group__create-at">${changeTime(article.time)}</span>
            </div>
        </div>
        <div class="article__head__menu" id="article__head__menu">

        </div>
    </div>
    <p class="article__content spacing-x">
        ${article.content}
    </p>
    <img src="${article.image_url}" alt="" srcset="" class="article__img">
    <div class="article__footer spacing-x">
        <div class="article__footer__top">
            <ul class="article__footer__top__list" id="article__footer__top__list">
                <!-- 
            <li class="article__footer__top__item"></li>
            <li class="article__footer__top__item"></li>
            <li class="article__footer__top__item"></li> 
            -->
            </ul>
        </div>
        <div class="article__footer__bottom">
            <img src="${ProfileImg}" alt="" class="article__footer__bottom__img">
            <div class="article__footer__bottom__field">
                <input type="text" class="article__footer__bottom__field__input" placeholder="Komentari....">
                <span class="article__footer__bottom__field__icon" id="article__footer__bottom__field__icon">
                    <!-- svg -->
                </span>
            </div>

        </div>
    </div>
</article>
`
})

const articleSection = GetId("articles")
articleSection.innerHTML = outHtml

// Inject menus svg
const articleMenus = document.querySelectorAll("#article__head__menu")

articleMenus.forEach(item => {
    item.innerHTML = `
<span class="article__head__menu__svg cursor">
    <svg>
        <use xlink:href="${MenuSvg}" />
    </svg>
</span>
`
})

// Footer
const articleInputIcons = document.querySelectorAll("#article__footer__bottom__field__icon");
articleInputIcons.forEach(item => {
    item.innerHTML = `
        <span class="article__footer__bottom__field__icon__svg cursor">
            <svg>
                <use xlink:href="${ImageSvg}" />
            </svg>
        </span>
`
})
import SettingSvg from '../svg/settings.svg'
import { GetId, ListedItem } from './helpers'


// handle change setting to svg
const settings = document.querySelectorAll("#setting")

settings.forEach((item) => {
    item.innerHTML = `
        <svg>
           <use xlink:href="${SettingSvg}" />
        </svg>
    `
})


// Class 
const classList = [{
    id: 1,
    name: "Machine Learning 1",
}, {
    id: 2,
    name: "Cloud Computing",
}, {
    id: 3,
    name: "Calculus",
}, {
    id: 4,
    name: "UI / UX",
}]
let outNode = "";
const listedClass = GetId("listed__class");

classList.forEach((item) => {
    outNode += ListedItem(item)
});

listedClass.innerHTML = outNode
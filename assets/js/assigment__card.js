import { GetId, ListedItem } from './helpers'

// Class 
const classList = [{
    id: 1,
    name: "Test UAS",
    time: "12/3/2021",
    class: "Cloud Computing"
}, {
    id: 2,
    name: "Reading Section",
    time: "15/3/2021",
    class: "Bhs Inggris"
}, {
    id: 3,
    name: "Math Basic UTS",
    time: "1/3/2021",
    class: "Calculus"
}, {
    id: 4,
    name: "Praktek Design",
    time: "2/3/2021",
    class: "Design Digital"
}]
let outNode = "";
const listedClass = GetId("listed__assigment");

classList.forEach((item) => {
    outNode += ListedItem(item, true)
});

listedClass.innerHTML = outNode
import MenuSvg from '../svg/more-horizontal.svg'

export const GetId = (id) => document.getElementById(id)
export const changeTime = (time) => {
    return new Date(time)
        .toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
}


export const ListedItem = (item, isAssigment = false) => `
${!!isAssigment ? `
<div class="my-1">
    <span class="small">
        ${item.class}
    </span>
    `: ``}
    <li class="${!!isAssigment ? `py-0` : ``}">
        ${item.name}
        <span class="list__listed__menu cursor">
            <svg>
                <use xlink:href="${MenuSvg}" />
            </svg>
        </span>
    </li>
    ${!!isAssigment ? `
    <span class="small">
        ${item.time}
    </span>
</div>
` : ``}
`;
import { GetId } from './helpers'
import CeretSvg from '../svg/chevron-down.svg'
const ceret = GetId("filter__tagline__drop__ceret")
ceret.innerHTML = `
<svg>
    <use xlink:href="${CeretSvg}" />
</svg>
`
import { $ } from "../../utils/functionDOM.js"

const space = `
    <div id="space-bg-container"><img src="../../assets/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg" alt="space-bg" id="space-bg"></div>
`;

export const chargeMoonAssets = () => {
    $('.eye-section').insertAdjacentHTML('beforeend', space)
}
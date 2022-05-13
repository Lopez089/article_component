// Ver en que tipo de pantalla estoy
//---- si estoy en pantalla grande o tablet 
//--------si es grande
//-----------agregar un evento de click 
// ---------------si hace click
// ------------------insertar el componente en el html
// -------si es movil
//-----------agregar un evento de click 
// ---------------si hace click
// ------------------insertar el componente en el html
// ------------------agregar los estilos para movil


const $cardShare = document.querySelector('.card-share')

const resolution = window.screen.width
const componentTooltip = `
    <div class="card-tooltip">
        <span class="triangulo-shere"></span>
        <p>SHERE</p>
        <section class="card-social">
            <a href="">
                <img src="static/icon-facebook.svg" alt="face">
            </a>
            <a href="">
                <img src="static/icon-twitter.svg" alt="twitter">
            </a>
            <a href="">
                <img src="static/icon-pinterest.svg" alt="pinterest">
            </a>
        </section>  
    </div>`
const addComponentCardShere = () => $cardShare.insertAdjacentHTML('afterbegin', componentTooltip)




if (resolution < 768) {
    $cardShare.insertAdjacentHTML('afterbegin', componentTooltip)
    const $cardTooltip = document.querySelector('.card-tooltip')

    const toogleVisivility = () => {
        if ($cardTooltip.style.visibility === 'hidden') {
            $cardTooltip.style.visibility = 'visible'
        } else {
            $cardTooltip.style.visibility = 'hidden'
        }
    }
    $cardShare.addEventListener('click', () => toogleVisivility())
} else {
    $cardShare.insertAdjacentHTML('afterbegin', componentTooltip)
    const $cardTooltip = document.querySelector('.card-tooltip')

    const toogleVisivility = () => {
        if ($cardTooltip.style.visibility === 'hidden') {
            $cardTooltip.style.visibility = 'visible'
        } else {
            $cardTooltip.style.visibility = 'hidden'
        }
    }
    $cardShare.addEventListener('click', () => toogleVisivility())

}
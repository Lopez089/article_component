// Ver en que tipo de pantalla estoy
// si estoy en pantalla grande o tablet 
//si es grande
// insertar el componente en el html
// todo: medir en que pixeles esta el boton shere
// apartir de ahi poner eso pixele con css para poner el componete en su sitio
// si es movil
// si el usuario hace click en shere
// agregar el componente en la parte de footer
// quitar toda la parte del footer anterior para
// dar estilos 

const $cardShare = document.querySelector('.card-share')
const resolution = window.screen.width
const componentTooltip = `
    <div class="card-tooltip">
        <span class="triangulo-shere"></span>
        <p>SHERE</p>
        <section class="card-social">
            <a href="#">
                <img src="static/icon-facebook.svg" alt="face">
            </a>
            <a href="#">
                <img src="static/icon-twitter.svg" alt="twitter">
            </a>
            <a href="#">
                <img src="static/icon-pinterest.svg" alt="pinterest">
            </a>
        </section>  
    </div>`

if (resolution < 768) {
    //alert('movil')
} else {
    $cardShare.insertAdjacentHTML('afterbegin', componentTooltip)
}
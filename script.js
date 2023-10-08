document.addEventListener("DOMContentLoaded", function () {
    const paisajesData = [
        {
            imagen: "https://media.ambito.com/p/50b4f0796a83521fbb143ddb2eccc3f8/adjuntos/239/imagenes/040/733/0040733705/1200x675/smart/perito-morenojpg.jpg",
            nombre: "Glaciar Perito Moreno, Santa Cruz",
            descripcion: "Este impresionante glaciar en el Parque Nacional Los Glaciares es conocido por su espectacular ruptura de hielo y sus masivas paredes de hielo que se elevan desde el agua."
        },
        {
            imagen: "https://media.puntal.com.ar/p/bb14fc0944baee632fc3dd36b192d83f/adjuntos/270/imagenes/001/526/0001526262/1200x0/smart/cerro-fitz-roy-100jpg.jpg",
            nombre: "Monte Fitz Roy, Santa Cruz",
            descripcion: "También llamado Cerro Fitz Roy, es uno de los picos más icónicos de la Patagonia y ofrece vistas panorámicas inigualables."
        },
        {
            imagen: "https://elcomercio.pe/resizer/RL0d8FtKPdtFkL1PdMh48TqwIFQ=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/3O3JZKA6QBE2VJGEJFRLRXK7TM.jpg",
            nombre: "Cataratas del Iguazú, Misiones",
            descripcion: "Este sistema de cascadas en el Parque Nacional Iguazú es uno de los destinos naturales más impresionantes del mundo."
        },
        // Agrega más objetos para más paisajes
    ];

    const carroussel = document.querySelector(".carroussel");

    paisajesData.forEach((paisaje, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="card">
                <img src="${paisaje.imagen}" alt="${paisaje.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${paisaje.nombre}</h5>
                    <p class="card-text">${paisaje.descripcion}</p>
                </div>
            </div>
        `;

        // Establece un estilo específico para la imagen
        const imagen = li.querySelector("img");
        imagen.style.height = "100%";

        carroussel.appendChild(li);
    });

    // Inicializa el carrusel de bxSlider
    $('.carroussel').bxSlider({
        mode: 'horizontal',
        auto: false,
        infiniteLoop: true,
        hideControlOnEnd: true,
        pager: false,
        controls: true
    });
});
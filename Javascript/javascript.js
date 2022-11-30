
// Declaro mi array con los objetos que formarán parte de mi catálogo de juegos

const videojuegos = [
    {
        id: 1,
        nombre: "Tales of Berseria",
        descripcion: "Emprende un viaje de autodescubrimiento adoptando el rol de Velvet, una joven cuya personalidad, antaño dulce, ha sido sustituida por una ira y un odio exacerbados producto de una traumática experiencia ocurrida tres años antes de los eventos de Tales of Berseria.",
        genero: "JRPG",
        caracteristicas: "Un jugador",
        imagen: "./Assets/talesofberseria.jpg",
        precio: 49.99
    },
    {
    
        id: 2,
        nombre: "Baldur's Gate 3",
        descripcion: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.",
        genero: "RPG",
        caracteristicas: "Un jugador, Cooperativo en línea",
        imagen: "./Assets/baldursgate3.jpg",
        precio: 59.99            
    },
    {
        id: 3,
        nombre: "Hollow Knight",
        descripcion: "Una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.",
        genero: "Plataforma",
        caracteristicas: "Un jugador",
        imagen: "./Assets/hollowknight.jpg",
        precio: 9.99
    },
    {
        id: 4,
        nombre: "Divine Divinity",
        descripcion: "El juego narra la inacabable batalla entre valerosos héroes y los destructivos poderes del Caos desatados por el Anillo Negro, una secta dedicada al mal. Jugarás en la piel del profetizado Elegido quien deberá unificar las siete razas de Rivellon para que puedas convertirte en el Divino y evitar el nacimiento del Señor del Caos.",
        genero: "RPG",
        caracteristicas: "Un jugador",
        imagen: "./Assets/divinedivinity.jpg",
        precio: 5.99
    },
    {
        id: 5,
        nombre: "Return to Monkey Island",
        descripcion: "El inesperado y emocionante regreso del creador de la serie, Ron Gilbert, que retoma la historia de las legendarias aventuras gráficas «The Secret of Monkey Island» y «Monkey Island 2: LeChuck's Revenge», desarrollado en colaboración con Lucasfilm Games.",
        genero: "Aventura gráfica",
        caracteristicas: "Un jugador",
        imagen: "./Assets/returntomonkeyisland.jpg",
        precio: 14.99
    },
    {
        id: 6,
        nombre: "Final Fantasy IX",
        descripcion: "Uno de los juegos de rol japoneses más aclamados, fue lanzado al mercado en el año 2000 (2001 en territorio europeo) y se convirtió en un éxito con más de 5,5 millones de copias vendidas en todo el mundo.No te pierdas esta oportunidad y disfruta ahora de las aventuras de Yitán, Vivi y compañía en esta versión para PC.",
        genero: "JRPG",
        caracteristicas: "Un jugador",
        imagen: "./Assets/finalfantasyix.jpg",
        precio: 20.99
    },
    {
        id: 7,
        nombre: "Cuphead",
        descripcion: "Un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra jefes. Inspirado en los dibujos animados de los años 30, los aspectos visual están diseñados con esmero empleando las mismas técnicas de la época; animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.",
        genero: "Plataforma",
        caracteristicas: "Un jugador, Cooperativo en línea",
        imagen: "./Assets/cuphead.jpg",
        precio: 19.99
    },
    {
        id: 8,
        nombre: "Divinity: Original Sin 2",
        descripcion: "La Divinidad está muerta. El Vacío se acerca. Y los poderes que yacen dormidos en tu interior están a punto de despertar.La batalla por la Divinidad ha empezado. Elije sabiamente y no regales tu confianza; la oscuridad acecha en cada corazón.",
        genero: "RPG",
        caracteristicas: "Un jugador, Cooperativo en línea",
        imagen: "./Assets/divinityoriginalsin2.jpg",
        precio: 44.99
    }
];

//Llamo a las variables que necesito con el DOM

let tarjetasJuegos = document.getElementById ("tarjetas-juegos");
let botonStart = document.getElementById ("btnStart");


//          Armado de funciones


//Función para crear las tarjetas del catalogo de videojuegos



function dibujarCatalogoJuegos () {
    console.log (videojuegos);
    videojuegos.forEach (videojuego => {
            let contenedorTarjetas = crearTarjetas (videojuego);
            tarjetasJuegos.append(contenedorTarjetas);
        });
}


function crearTarjetas (videojuego) {
    
    //boton    
    let botonComprar = document.createElement ("button");
    botonComprar.className = "btn btn-info fw-semibold";
    botonComprar.innerText = `COMPRAR POR $ ${videojuego.precio}`;
    
    //card footer
    let footerTarjeta = document.createElement ("div");
    footerTarjeta.className = "card-footer d-flex justify-content-center";
    footerTarjeta.append (botonComprar);
    
    //card body
    let cuerpoTarjeta = document.createElement ("div");
    cuerpoTarjeta.className = "card-body d-flex flex-column justify-content-between";
    cuerpoTarjeta.innerHTML = `
    <h5 class="card-title mt-1 text-center fw-bolder">${videojuego.nombre}</h5>
    <p class="card-text mt-1">${videojuego.descripcion}</p>
    <ul>
    <li><u>Género</u>: ${videojuego.genero}</li>
    <li><u>Características</u>: ${videojuego.caracteristicas}</li>        
    </ul>
    `;
    
    //imagen
    let imagen = document.createElement ("img");
    imagen.src = videojuego.imagen;
    imagen.className = "card-img-top";
    imagen.alt = `Portada del juego ${videojuego.nombre}`;
    
    //Tarjeta
    let tarjeta = document.createElement ("div");
    tarjeta.className = "card border-info m-3 p-2";
    tarjeta.style = "width: 18rem";
    tarjeta.append (imagen);
    tarjeta.append (cuerpoTarjeta);
    tarjeta.append (footerTarjeta);
    
    return tarjeta
}

// Ejecución de funciones


dibujarCatalogoJuegos ();

// Eventos

botonStart.onclick = () => location.href='#juegosDisponibles';


// Declaro la variable

let elegirJuego = parseInt (prompt ("¿Qué videojuego quisieras comprar? (Elije el título del 1 al 8 ó 0 para Salir): \n 1- Tales of Berseria \n 2- Baldur's Gate 3 \n 3- Hollow Knight \n 4- Divine Divinity \n 5- Return to Monkey Island \n 6- Final Fantasy IX \n 7- Cuphead \n 8- Divinity: Original Sin 2 \n 0- Salir"));

// Realizo un algoritmo condicional y uno con ciclo para cumplir con la consigna de ésta entrega. 


if (elegirJuego != 0 && elegirJuego <= 8) {
console.log("¡Gracias por comprar con nosotros!");
while (elegirJuego != 0 && elegirJuego < 9) {
    elegirJuego = parseInt (prompt ("¿Qué videojuego quisieras comprar? (Elije el título del 1 al 8 ó 0 para Salir): \n 1- Tales of Berseria \n 2- Baldur's Gate 3 \n 3- Hollow Knight \n 4- Divine Divinity \n 5- Return to Monkey Island \n 6- Final Fantasy IX \n 7- Cuphead \n 8- Divinity: Original Sin 2 \n 0- Salir"));
};
} else if (elegirJuego == 0) {
    console.log("¡Gracias por visitarnos!")
} else {
console.log("Parece que no seleccionaste un número correcto");
};


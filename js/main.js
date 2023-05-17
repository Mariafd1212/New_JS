//Bienvenida
let nombreIngresado = prompt("Ingrese su nombre ");
alert("Bienvenido/a " + nombreIngresado);

var idiomaElegido = prompt("Que idioma deseas aprender?");
console.log("Verás el precio del curso en la consola");

//Decalaración de variables y constantes
let costoIngles = 50;
let costoJapones = 80;
let costoFrances = 100;
let costoAleman = 100;
const coin = "USD";

//Condicionales
if (idiomaElegido == "ingles") {
  alert("El monto a abonar seria de " + costoIngles + " " + coin);
} else if (idiomaElegido == "japones") {
  alert("El monto a abonar seria de " + costoJapones + " " + coin);
} else if (idiomaElegido == "frances") {
  alert("El monto a abonar seria de " + costoFrances + " " + coin);
} else if (idiomaElegido == "aleman") {
  alert("El monto a abonar seria de " + costoAleman + " " + coin);
} else {
  alert("El curso ingresado no está disponible");
}

//Ciclos
for (let turnos = 1; turnos <= 30; turnos++) {
  let claseAgendada = prompt("Quisieras agendar su primera clase?");
  if (claseAgendada == "no") {
    alert(
      "Gracias por visitarnos, nos vemos cuando te decidas a tomar un curso!"
    );
  } else if (claseAgendada == "si") {
    alert("Genial, estaremos agendando tu turno...");
    alert("Turno Nº " + turnos + " Nombre: " + nombreIngresado);
  }
  if (claseAgendada == "si") break;
}

let respuestaIva = prompt("Quieres ver tu precio mas iva?");
if (respuestaIva == "no") {
  alert(
    "Gracias por visitarnos, nos vemos cuando te decidas a tomar un curso!"
  );
} else if (respuestaIva == "si") {
  alert("Gracias!Estarás viendo tu monto total en la consola");
}

//Funciones
let idioma = prompt("Ingrese nuevamente el curso que eligió");
function calculoIva(idioma) {
  const iva = 1.21;
  let costoIngles = 50;
  let costoJapones = 80;
  let costoFrances = 100;
  let costoAleman = 100;
  switch (idioma) {
    case "ingles":
      return costoIngles * iva;
      break;
    case "japones":
      return costoJapones * iva;
      break;
    case "frances":
      return costoFrances * iva;
      break;
    case "aleman":
      return costoAleman * iva;
      break;
    default:
      return 0;
      break;
  }
}
//Llamando el resultado por la consola
console.log(calculoIva(idioma));

//Objetos
class User {
  constructor(nombre, clave, mail) {
    this.nombre = nombre;
    this.clave = clave;
    this.mail = mail;
  }

  presentar() {
    alert(
      "Hola" +
        " " +
        this.nombre +
        "Tu usuario de acceso es" +
        " " +
        this.mail +
        " " +
        "y tu clave es" +
        " " +
        this.clave
    );
  }
}
const user1 = new User("Bruno", "12345", "bruno@gmail.com");
user1.presentar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.agotado = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.agotado = true;
  }
}
const producto1 = new Producto("Ingles", "50");
const producto2 = new Producto("Japones", "80");

producto1.sumaIva();
producto2.sumaIva();

console.log(producto1.agotado);

producto1.vender();

console.log(producto1.agotado);

//Arrays
const participantesSorteo = [
  "Maria Flores",
  "Leonardo Arias",
  "Tomás Jimenez",
  "Victoria Remirez",
  "Bruno Mars",
  "Cristian Miglionico",
  "Patricia Perez",
  "Erick Leprito",
  "Matias Povesi",
  "Ana Quevedo",
  "Melina Flores",
  "Natalia Quintero",
  "Pedro Tomatti",
  "Laura Nava",
];

let random = Math.random() * participantesSorteo.length;
random = Math.floor(random);

alert("Da click en aceptar para saber si eres el ganador de un curso gratis!");
alert("La/El ganador(a) es" + " " + participantesSorteo[random]);

//Métodos
const cursos = [
  { nombre: "Ingles", precio: 20000 },
  { nombre: "Japones", precio: 30000 },
  { nombre: "Aleman", precio: 40000 },
  { nombre: "Frances", precio: 50000 },
];

const resultado1 = cursos.filter((curso) => curso.nombre.includes("Ingles"));
console.log(resultado1);
const resultado2 = cursos.filter((curso) => curso.nombre.includes("Japones"));
console.log(resultado2);
const resultado3 = cursos.filter((curso) => curso.nombre.includes("Frances"));
console.log(resultado3);
const resultado4 = cursos.filter((curso) => curso.nombre.includes("Aleman"));
console.log(resultado4);

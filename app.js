alert('¡Bienvenido a nuestro sitio web!');
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);
nombre = prompt('Escribe tu nombre');
edad = prompt('Escribe tu edad');
if (edad >= 18) {
    alert(nombre + ' ¡Puedes obtener tu licencia de conducir!');
}
else { 
    alert(nombre + ' ¡No puedes obtener tu licencia de conducir!');
}
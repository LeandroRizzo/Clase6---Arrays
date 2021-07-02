/*
let nombre ="Leandro"
let apellido = "Rizzo"
let edad = 31
let disp = false
let vestimenta ={
    remera: "Nike",
    pantalon: "Adidas"
}
let segundoArray =["Pepe", 30, true]


//.lenght
let miPrimerArray = [nombre, apellido, edad, disp, vestimenta, segundoArray];

console.log(miPrimerArray);

for(i=0; i<miPrimerArray.length; i++){
    console.log(miPrimerArray[i]);
}*/
////////

class Producto{
    constructor(tipo, marca, tamaño, precio){
        this.tipo = tipo,
        this.marca = marca,
        this.tamaño = tamaño,
        this.precio = precio
    }
}

const Producto1 = new Producto("Yerba mate", "Taraguí","1 kg", 500)
const Producto2 = new Producto("Azucar", "Ledezma","1 kg", 250)
const Producto3 = new Producto("Microondas", "Atma","5 lt", 1500)
const Producto4 = new Producto("Sabanas", "Ruby","Kingsize", 4000)

const Productos = []

Productos.push(Producto1)
Productos.push(Producto2)
Productos.push(Producto3)
Productos.push(Producto4)


let dato = prompt("¿Que estas buscando?");

console.log(Productos.find(Producto => Producto.tipo == dato));

console.log(Productos.filter(Producto => Producto.precio < 1000));


/* 
//.push
let numeros = [1, 2, 3, 4, 5]
let test = ["Lea", "Pablo", "Marcos", "Pedro", "Matias"]
for(i=0; i<test.length; i++){
    console.log(test[i]);
}

let nuevoTexto = "AAA"
test.push(nuevoTexto)
console.log(test);
//.unshift
test.unshift("BBB")
console.log(test);
//.concat
let listaNueva = test.concat(numeros);
console.log(listaNueva);
//.slice(1,3)
let recorte = listaNueva.slice(1,3)
console.log(recorte);
//.join()
let pasarDatos = listaNueva.join(",")
console.log(pasarDatos)
//.sort()
let pasarDatos = listaNueva.sort()
console.log(pasarDatos)
*/
////////
/*
class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio
    }
}

const Producto1 = new Producto("Remera", 5000);
const Producto2 = new Producto("Mate", 1000);
const Producto3 = new Producto("Pelota", 1700);
const Producto4 = new Producto("Auto", 5000000);

const Productos = []

Productos.push(Producto1)
Productos.push(Producto2)
Productos.push(Producto3)
Productos.push(Producto4)

//Ordenar objetos alfabeticamente/numericamente
let ProductosOrdenados = Productos.sort(function(a, b){
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
});

//console.log(ProductosOrdenados);

//.find buscador de UN solo obejto
let dato = prompt("Que queres buscar")
console.log(Productos.find(Producto => Producto.nombre == dato));
//.filter busca TODOS los que haya
console.log(Productos.filter(Producto => Producto.precio < 5000));
*/
///////
/*
//Formas de recorrer elementos del objeto for in/for of/for each
let objetoPrueba = {nombre: "Juan", apellido: "Martin", edad: 20};

//for in(para recorrer internamente las propiedades del objeto)
for ( const propiedad in objetoPrueba){
    console.log(`${propiedad} = ${objetoPrueba[propiedad]} esto es un for in`);
}

//for of           PRODUCTOS=lineas 64 a 67
for(const value of Productos){
    for ( const propiedad in value){
        console.log(`${propiedad} = ${value[propiedad]}`);
    }
}

//for each
Productos.forEach(elemento => {
    console.log(elemento.nombre)
})
*/
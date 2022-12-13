const productos = [
    { nombre: "vestido", precio: 5000},
    { nombre: "top", precio: 2200 },
    { nombre: "jean ", precio: 6000 },
    { nombre: "camisa", precio: 4500 },
    { nombre: "pantalon sastrero", precio: 5500 },
    { nombre: "remera", precio: 2000 }
];
let carrito = []// vacio hasta que el usuario elija productos

let bienvenida = alert("¡Bienvenido a Cronocopio Indumentaria! \n Aquí podrás encontrar todo para la mujer")
let seleccion = prompt("Hola, ¿Deseas realizar algunas compras? \n Por favor, ingresa SI o NO")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingresa SI o No")
    seleccion = prompt("Hola, ¿Deseas realizar algunas compras? \n Por favor ingresa SI o NO")
}

if(seleccion == "si") {
    alert("A continuación presentaremos nuestro catálogo de productos")
    let listaDeProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(listaDeProductos.join("\n -"))
} else if (seleccion == "no") {
    alert("Gracias por tu visita, ¡Te estaremos esperando! \n \t¡Regresa pronto!")
}

while(seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "vestido" || producto == "top" || producto == "jean" || producto == "camisa" || producto == "pantalon sastrero" || producto == "remera") {
        switch(producto) {
            case "vestido":
                precio = 5000
                break;
            case "top":
                precio = 2200
                break;
            case "jean":
                precio = 6000
                break;
            case "camisa":
                precio = 4500
                break;
            case "pantalón sastrero":
                precio = 5500
                break;
            case "remera":
                precio = 2000
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuántas unidades desea?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("Ese producto no está disponible")
    }

    seleccion = prompt("¿Desea seguir con su compra?") 
    while(seleccion === "no") {
        alert("¡Gracias por su compra!")
        console.log
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}  

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El monto total a pagar por su compra es: $` + total) 


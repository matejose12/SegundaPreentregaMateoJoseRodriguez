class productos {
    constructor(producto, marca, color, precio){
        //propiedades o atributos de nuestra clase
        this.producto = producto,
        this.marca = marca,
        this.color = color,
        this.precio = precio
    }
    mostrarProducto(){
        console.log(`El producto es ${this.producto}, la marca es ${this.marca}, su color es ${this.color} y su precio es ${this.precio}`)
    }
}
// Creacion de catalogo
const producto1 = new productos("luz de colores", "3dmagic","multicolor", 2500)
const producto2 = new productos("lampara", "planeta","morado", 3500)
const producto3 = new productos("iman san juan", "san juan","blanco", 200)
const producto4 = new productos("lapicera", "cross","negro", 1900)
const producto5 = new productos("alfombrilla", "trust","rojo", 1200)
const producto6 = new productos("portacelular", "3dmagic","blanco", 600)
const producto7 = new productos("vaso termico", "keep","gris metalizado", 1200)
const producto8 = new productos("mate", "keep","marron", 1200)
const producto9 = new productos("Masajeador", "superlife","verde", 1700)
const producto10 = new productos("termo", "Stanley","verde", 5000)

// muestra de catalogo en consola
const catalogo = [producto1, producto2, producto3, producto4,producto5, producto6, producto7, producto8, producto9, producto10]
//console.log(catalogo)

function verCatalogo(array){
    for(let productos of array){
        console.log(`El ${productos.producto} de la marca ${productos.marca} vale $${productos.precio}`)
    }
}
function mostrarCatalogo(array){
    
    array.forEach( 
        
        (productos) => {
            
            productos.mostrarProducto()
            
        }
    )
}
//mostrarCatalogo(catalogo);

//Muestra el producto buscado en consola
function buscarProducto(array){
    let poductoBuscado = prompt("Ingrese el producto que desea buscar")
    
    let productoEncontrado = array.find(
        (productos)=> productos.producto.toLowerCase() == poductoBuscado.toLowerCase()
        )
    if(productoEncontrado == undefined){
        console.log(`Lo sentimos el ${poductoBuscado} no se encuenta en nuestro catalogo`)
    }else{
        console.log(productoEncontrado)
    }
}
// Por ahora no vamos a usar este codigo
// funcion para ordenar el catalogo de mayor a menor
//function ordenarMayorAMenor(array){
  //  console.log(array.sort((a,b) => (b.precio - a.precio)))
//}
 

// funcion para ordenar el catalogo de menor a mayor
function catalogoMenorAMayor(array){
    console.log(array.sort((a,b) => ( a.precio - b.precio)))
}
function comentarios(){
prompt("ingrese su comentario aqui")
alert(`gracias por su comentario :) esperamos que vuelva pronto 💝 `)
}
function preguntas(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver el catalogo de productos
                        2 - Tabla de productos
                        3 - Buscar producto
                        4 - Ordenar por precio menor a mayor 
                        5 - Dejar un comentario 
                        0 - Para salir
                        `))
    menu(opcion)
}
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por entrar a nuestra tienda, esperamos que vuelva pronto`)
        break    
        case 1:
            verCatalogo(catalogo)
        break 
        case 2: 
            console.table(catalogo)
      	break 
   	    case 3: 
           buscarProducto(catalogo)  
      	break
        case 4: 
        catalogoMenorAMayor(catalogo)
      	break
        case 5: 
        comentarios()
      	break 
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}


 let salir = false
 if(salir!=true){
     preguntas()
 }

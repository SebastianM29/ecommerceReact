const productos = [
    {id: 1 , nombre : "Tabla de Asado",stock:3, precio:20000 , imagePath: ".././public/img/img2.jpg", cat:"madera"},
    {id: 2 , nombre : "Maceta" ,stock:3,precio:1000 ,imagePath: ".././public/img/img3.jpg", cat:"madera"},
    {id: 3 , nombre : "Cuadro" ,stock:3, precio:15000 , imagePath: ".././public/img/img4.jpg", cat:"laser"},
    {id: 4 , nombre : "Cuadro",stock:3, precio:20000 , imagePath: ".././public/img/img6.jpg", cat:"laser"},
    {id: 5 , nombre : "Pizzera",stock:3, precio:1500 , imagePath: ".././public/img/img7.jpg", cat:"madera"},
    {id: 6 , nombre : "Cream ordeñe",stock:3, precio:1500 , imagePath: ".././public/img/bio1.webp", cat:"cPersonal"},
    {id: 7 , nombre : "Combo Origenes",stock:3, precio:1500 , imagePath: ".././public/img/bio2.png", cat:"cPersonal"},
    {id: 8 , nombre : "Queen Beauty Set",stock:3, precio:1500 , imagePath: ".././public/img/bio3.jpg", cat:"cPersonal"},
    {id: 9 , nombre : "Crema corporal de Arnica",stock:3, precio:1500 , imagePath: ".././public/img/bio4.jpg", cat:"cPersonal"},
    {id: 10 , nombre : "lana", precio:1500 ,stock:3, imagePath: ".././public/img/textil1.jpeg", cat:"textil"},
    {id: 11 , nombre : "lana", precio:1500 ,stock:3, imagePath: ".././public/img/images.jfif", cat:"textil"}
]



export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 1000);
})
}
export const getProductsById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
      const resp = productos.find(item => item.id === id)
      resolve(resp)
    }, 1000);
})
}
export const getCategoryProd = (catID) => {
return new Promise((resolve) => {
    setTimeout(() => {
      const resp = productos.filter(item => item.cat === catID )
      resolve(resp)
    }, 1000);
})
}
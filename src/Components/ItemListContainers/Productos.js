const Productos =[
{
    imgSrc:"./public/assets/camisetas.jpg",
    id: 1,
    titulo: "Remera Argentina",
    precio: "$2200",
    categoria:"remera",
    descripcion:"...."
  },
  {
    imgSrc:"../img/camisetas.jpg",
    id: 2,
    titulo: "Remera Argentina  ",
    precio: "$1500",
    categoria:"remera",
    descripcion:"..."
  }
]
const getAllProducts= () => {
    const promise = new Promise((resolve) => {
        setTimeout(()=>
        {
          return resolve(Productos);  
        },2000);

    });
    return promise
};
export default getAllProducts;
//Código del repo 11-11 de Aylen
async function cargarProductos(){
    let data = await fetch('/api/productos');
    console.log(data)
    let products = await data.json();
    console.log(products)

    let ul = document.querySelector("ul#productos");
    ul.innerHTML = "";

    //única función editada
    let createButton = document.createElement("i");
    createButton.setAttribute("class", "fa-solid fa-plus");
    createButton.addEventListener('click', () => {
        let div = document.createElement("div");
        div.className = 'formulario';

        let labelNombre = document.createElement("label")
        labelNombre.innerHTML = "Nombre: "
        div.appendChild(labelNombre)

        let inputNombre = document.createElement("input"); // Name, type y id
        div.appendChild(inputNombre);

        let br = document.createElement("br")
        div.appendChild(br)

        let labelDescription = document.createElement("label")
        labelDescription.innerHTML = "Descripción: "
        div.appendChild(labelDescription)

        let inputDescription = document.createElement("input"); // Name, type y id
        div.appendChild(inputDescription);

        let labelPrice = document.createElement("label")
        labelPrice.innerHTML = "Precio: "
        div.appendChild(labelPrice)

        let inputPrice = document.createElement("input"); // Name, type y id
        div.appendChild(inputPrice);

        //NO TOQUEN EL VALOR DE CATEGORY E IMAGE
        //Esto está puesto con cinta para que no crashee el servidor cuando nos enseñen associations lo edito
        //Además las imágenes seguro que hay que cargarlas aparte y editar el servicio de create
        let inputCategory = document.createElement("input"); // Name, type y id
        inputCategory.value =1
        div.appendChild(inputCategory);

        let inputImage = document.createElement("input"); // Name, type y id
        inputImage.value = 1
        div.appendChild(inputImage);

        let boton = document.createElement("button");
        boton.innerHTML = "Crear"
        boton.addEventListener("click", async() => {
            await fetch('/api/productos', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json" // formencode
                },
                body: JSON.stringify({
                    name: inputNombre.value,
                    description: inputDescription.value,
                    price: inputPrice.value,
                    category_id: inputCategory.value,
                    image_id: inputImage.value
                })
            })
            cargarProductos();
        })
        div.appendChild(boton);
        ul.innerHTML = "";
        ul.appendChild(div);
    })
    ul.appendChild(createButton);

    products.forEach(function(product){
        let li = document.createElement('li');

        // ID
        let spanId = document.createElement('span');
        spanId.innerHTML = `${product.id} - `;
        li.appendChild(spanId);
        
        // Nombre
        let spanName = document.createElement('span');
        spanName.innerHTML = product.name;
        li.appendChild(spanName);

        // Precio
        let spanPrice = document.createElement('span');
        spanPrice.innerHTML = ` $${product.price}`;
        li.appendChild(spanPrice);

        // Categoría
        let spanCategory = document.createElement('span');
        spanCategory.innerHTML = ` ${product.Category.name}`;
        li.appendChild(spanCategory);

        // Icono editar
        let iEditar = document.createElement('i');
        iEditar.setAttribute("class", "fa-solid fa-pen");
        iEditar.addEventListener("click", async() => {
            let div = document.createElement("div");
            div.className = 'formulario';

            let inputNombre = document.createElement("input"); // Name, type y id
            inputNombre.value = product.name;
            div.appendChild(inputNombre);

            let inputPrice = document.createElement("input"); // Name, type y id
            inputPrice.value = product.price;
            div.appendChild(inputPrice);

            let boton = document.createElement("button");
            boton.addEventListener("click", async() => {
                await fetch('/api/productos/'+product.id, {
                    method: "PUT",
                    headers:{
                        "Content-Type": "application/json" // formencode
                    },
                    body: JSON.stringify({
                        name: inputNombre.value,
                        price: inputPrice.value,
                        category: null
                    })
                })
                cargarProductos();
            })
            div.appendChild(boton);
            ul.innerHTML = "";
            ul.appendChild(div);
        })
        li.appendChild(iEditar);
        
        // Icono borrar
        let iBorrar = document.createElement('i');
        iBorrar.setAttribute("class", "fa-solid fa-trash");
        iBorrar.addEventListener("click", async() => {
            await fetch('/api/productos/'+product.id, {
                method: "DELETE"
            })
            cargarProductos();
        })
        li.appendChild(iBorrar);
        

        ul.appendChild(li);
    })


    return products;
}

window.addEventListener("load", async()=>{
    let products = await cargarProductos();
    console.log(products);
})
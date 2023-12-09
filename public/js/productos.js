//Código del repo 11-11 de Aylen
async function cargarProductos(){
    const url = new URL(document.location.href);
    let path = url.pathname
    console.log(path)
    path = path.slice(1)
    console.log(path)

    let data = await fetch(`/api/${path}`);
    console.log(data)
    let categoryProducts = await data.json();
    console.log(categoryProducts)

    data = await fetch('/api/categorias');
    console.log(data)
    let categories = await data.json();
    console.log(categories)

    let ul = document.querySelector("div#productos");
    ul.innerHTML = "";

    
    categoryProducts.Products.forEach(function(product){
        let col = document.createElement('div')
        col.setAttribute('class', "col-md-3 py-3 py-md-0")
        
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        
        let overlay = document.createElement('div')
        overlay.setAttribute('class', 'overlay')
        let botonEditar = document.createElement('button')
        botonEditar.setAttribute('class','btn btn-secondary')
        botonEditar.setAttribute('type', 'button')
        botonEditar.setAttribute('title','Editar producto')
        let iEditar = document.createElement('i');
        iEditar.setAttribute("class", "fa-solid fa-pen");
        botonEditar.appendChild(iEditar)
        let botonEditarImg = document.createElement('button')
        botonEditarImg.setAttribute('class','btn btn-secondary')
        botonEditarImg.setAttribute('title','Editar imagen')
        botonEditarImg.setAttribute('type', 'button')
        let iEditarImg = document.createElement('i');
        iEditarImg.setAttribute("class", "fa-solid fa-pen");
        botonEditarImg.appendChild(iEditarImg)
        let botonEliminar = document.createElement('button')
        botonEliminar.setAttribute('class','btn btn-secondary')
        botonEliminar.setAttribute('title','Eliminar producto')
        botonEliminar.setAttribute('type', 'button')
        let iBorrar = document.createElement('i');
        iBorrar.setAttribute("class", "fa-solid fa-trash");
        botonEliminar.appendChild(iBorrar)
        overlay.appendChild(botonEditar)
        overlay.appendChild(botonEditarImg)
        overlay.appendChild(botonEliminar)

        let img = document.createElement("img");
        img.src = "/img/products/"+product.image;

        let cardBody = document.createElement('div')
        let hNombre = document.createElement('h3')
        hNombre.innerHTML = product.name
        let pDescripcion = document.createElement('p')
        pDescripcion.innerHTML = product.description
        let hPrecio = document.createElement('h6')
        hPrecio.innerHTML = product.price
        cardBody.appendChild(hNombre)
        cardBody.appendChild(pDescripcion)
        cardBody.appendChild(hPrecio)

        card.appendChild(overlay)
        card.appendChild(img)
        card.appendChild(cardBody)
        col.appendChild(card)

        ul.appendChild(col)

    })


    return categoryProducts;
}

async function cargarProductosCliente(){
    let data = await fetch('/api/productos');
    console.log(data)
    let products = await data.json();
    console.log(products)

    data = await fetch('/api/categorias');
    console.log(data)
    let categories = await data.json();
    console.log(categories)

    let ul = document.querySelector("ul#productos");
    ul.innerHTML = "";
    
    products.forEach(function(product){
        let li = document.createElement('li');

        let img = document.createElement("img");
        img.src = "/img/products/"+product.image;
        li.appendChild(img);

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

        ul.appendChild(li);
    })


    return products;
}

window.addEventListener("load", async()=>{
    let products = await cargarProductos();
    console.log(products);
})
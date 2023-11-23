let db = require("../database/models/index");
let panes = require("../data/panes");
const service = {
    listarPanes:async () => {
/*         await db.sequelize.sync({ alter: true })
        console.log("intento de sync") */
        let productos = await db.Products.findAll({
            include: [{
                model: db.Categories,
                atrributes: 'name'
            }]
        })
        return productos
    },
    buscarPan: async (id) =>{
        let pan = await db.Products.findOne({
            where: {
                id: id
            }
        })
        return pan || {}
    },
    //create
    create: async (data) =>{
        let panACrear = {
            name: data.name,
            category_id: data.category_id,
            image_id: data.image_id,
            description: data.description,
            price: data.price
        }
        db.Products.create(panACrear)
    },
    //destroy
    delete: async (id) =>{
        db.Products.destroy({
            where: {
                id: id
            }
        })
    },
    //update
    update: async (data,id) => {
        let panAEditar = {
            name: data.name,
            // category: data.category,
            description: data.description,
            precio: data.precio
        }     

        db.Products.update(panAEditar, {
            where: {
                id: id
            }
        })
    }
};

module.exports = service
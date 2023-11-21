module.exports = (sequelize,dataTypes)=>{
    let alias = "Products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER, 
            allowNull: false
        },
        //TEMPORALES, cuando se vea asociaciones los voy a borrar
        category_id: {
            type: dataTypes.INTEGER
        },
        image_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Products = sequelize.define(alias,cols,config)
    return Products
}
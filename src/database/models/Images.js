module.exports = (sequelize,dataTypes)=>{
    let alias = "Images"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "images",
        timestamps: false
    }
    const Images = sequelize.define(alias,cols,config)

    Images.associate = (models) => {
        Images.hasMany(models.Products, {
            foreignKey: 'image_id'
        })
/*                 Products.belongsTo(models.Images)
*/            }

    return Images
}
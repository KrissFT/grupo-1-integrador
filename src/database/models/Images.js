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
    return Images
}
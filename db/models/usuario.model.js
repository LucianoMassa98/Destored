const {Model,DataTypes, Sequelize} = require('sequelize');
const {NEGOCIO_TABLE}=require('../models/negocio.model');
const {CUENTA_TABLE}=require('../models/cuenta.model');

//const {ROLE_TABLE}=require('../models/role.model');
const USUARIO_TABLE = 'usuarios';
const usuarioSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  negocioId:{
    field: 'negocio_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: NEGOCIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  cuentaId:{
    field: 'cuenta_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CUENTA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  celular: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  /*roleId: {
    field: 'role_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },*/
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model{
  // crear metodos estaticos
  static associate(models){
    // aqui quedara la parte donde trabajaremos todas laas relaciones
    /*this.hasOne(models.Negocio|, {
      as: 'customer',
      foreignKey: 'userId'
    });
    usuario -> empresa N:1
    usaurio -> role 1:1

    */
    this.belongsTo(models.Negocio, {as: 'negocio'});
    this.belongsTo(models.Cuenta, {as: 'cuenta'});
   // this.belongsTo(models.Negocio, {as: 'negocio'});
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}
module.exports = {
  USUARIO_TABLE,
  usuarioSchema,
  Usuario
}

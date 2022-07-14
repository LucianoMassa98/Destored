'use strict';
const {CATEGORIA_TABLE,categoriaSchema}=require('../models/categoria.model');
const {CUENTA_TABLE,cuentaSchema}=require('../models/cuenta.model');
const {DESCUENTO_TABLE,descuentoSchema}=require('../models/descuento.model');
const {NEGOCIO_TABLE, negocioSchema}=require('../models/negocio.model');
const {PRODUCTO_TABLE,productoSchema}=require('../models/producto.model');
const {USUARIO_TABLE,usuarioSchema}=require('../models/usuario.model');
const {CLIENTE_TABLE,clienteSchema}=require('../models/cliente.model');
const {PROVEEDOR_TABLE,proveedorSchema}=require('../models/proveedor.model');
const {DEPOSITO_TABLE,depositoSchema}=require('../models/deposito.model');
const {PAGO_TABLE,pagoSchema}=require('../models/pago.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(NEGOCIO_TABLE,negocioSchema);
    await queryInterface.createTable(DEPOSITO_TABLE,depositoSchema);
    await queryInterface.createTable(CUENTA_TABLE,cuentaSchema);
    await queryInterface.createTable(CATEGORIA_TABLE,categoriaSchema);
    await queryInterface.createTable(PRODUCTO_TABLE,productoSchema);
    await queryInterface.createTable(USUARIO_TABLE,usuarioSchema);
    await queryInterface.createTable(CLIENTE_TABLE,clienteSchema);
    await queryInterface.createTable(PROVEEDOR_TABLE,proveedorSchema);
    await queryInterface.createTable(DESCUENTO_TABLE,descuentoSchema);
    await queryInterface.createTable(PAGO_TABLE,pagoSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PAGO_TABLE);
    await queryInterface.dropTable(DESCUENTO_TABLE);
    await queryInterface.dropTable(PROVEEDOR_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(PRODUCTO_TABLE);
    await queryInterface.dropTable(CATEGORIA_TABLE);
    await queryInterface.dropTable(CUENTA_TABLE);
    await queryInterface.dropTable(DEPOSITO_TABLE);
    await queryInterface.dropTable(NEGOCIO_TABLE);

  }
};

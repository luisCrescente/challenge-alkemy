const { body } = require ('express-validator');
const path = require("path");


const validations = [
  
    body('name').notEmpty().withMessage('Debes poner un nombre Completo'),

    body('email')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('password')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5}).withMessage('La contraseña debe tener mas de 5 caracteres')
    ]

module.exports = validations ;
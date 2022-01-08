const { body } = require ('express-validator');



const validations ={ 
  
    validationRegister : [
    body('name').notEmpty().withMessage('Debes poner un nombre Completo'),

    body('email')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('password')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 8}).withMessage('La contraseña debe tener mas de 8 caracteres')
    ],

    validationLogin : [
        body('email').notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debe ser formato válido'),
        body('password').notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5}).withMessage('La contraseña debe tener mas de 8 caracteres')
    ]

 }
    

module.exports = validations ;
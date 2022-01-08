
//middle para control de rutas si el usuario no esta logeado
function authMiddleware (req, res, next){
    if (!req.session.userLogged){
        return res.redirect ('http://localhost:3003/')
       
    }
    next();
}

module.exports = authMiddleware;
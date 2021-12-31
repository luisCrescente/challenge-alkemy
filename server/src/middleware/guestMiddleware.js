// middle para controlar rutas  si el usuario esta logeado
function guestMiddleware (req, res, next){
    if (req.session.userLogged){
        return res.redirect ('http://localhost:3003/operation')
        
    }
    next();
}

module.exports = guestMiddleware;
function isAuth(req,res, next) {
    if(!req.session.isLoggedIn) {
        return res.redirect('/users/login')
    }
    next();
}

module.exports = isAuth;

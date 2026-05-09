

exports.getLoginPage = (req, res, next) => {
    res.render('auth/login', {pageTitle : 'Login page'});
}

exports.getSignupPage = (req, res, next) => {
    res.render('auth/signup', {pageTitle : 'Login page'});
}
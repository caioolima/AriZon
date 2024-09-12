// middleware/authorize.js
const authorize = (roles) => {
    return (req, res, next) => {
      const userRole = req.user.role;
      if (roles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({ message: 'Acesso negado' });
      }
    };
  };
  
  module.exports = authorize;
  
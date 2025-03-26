const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token || token !== "secreto") {
        return res.status(401).json({ error: 'No autorizado' });
    }
    
    next();
};

module.exports = authMiddleware;
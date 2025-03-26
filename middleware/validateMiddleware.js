const validateMiddleware = (req, res, next) => {
    if (['POST', 'PUT'].includes(req.method)) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Datos faltantes' });
        }
    }
    next();
};

module.exports = validateMiddleware;
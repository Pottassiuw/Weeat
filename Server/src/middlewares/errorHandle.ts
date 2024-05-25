export function centralErrorHandler(err, req, res, next) {
    console.error(err.stack); 
    res.status(err.statusCode || 500).json({ error: 'server mid error' });
  }
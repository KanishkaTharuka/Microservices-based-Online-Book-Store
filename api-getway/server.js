import express from 'express';
import { createProxyMiddleware} from 'http-proxy-middleware';

const app = express();

app.use('/api/authors', createProxyMiddleware({
    target: 'http://localhost:4003',
    changeOrigin: true
}));

app.use('/api/books', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true
}));

app.use('/api/orders', createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true
}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
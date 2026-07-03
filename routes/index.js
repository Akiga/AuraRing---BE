import userRoutes from './userRoutes.js';

function route(app) {
    app.use('/api', userRoutes);
}

export default route;
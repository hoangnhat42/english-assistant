import gpt from './gpt';

const initRoutes = (app) => {
    app.use('/api/v1/send-prompt',  gpt);
}

module.exports = initRoutes;
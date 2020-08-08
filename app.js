const express = require('express');

const path = require('path');

const startServer = async () => {
    const app = express();
    app.use(express.static(path.join(__dirname, 'build')));
    const port = process.env.PORT || '3010';
    app.listen(process.env.PORT );
};

startServer();
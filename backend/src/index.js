const express = require('express');
const cors = require('cors');
const path = require('path');

const paintingsRouter = require('./routes/paintings');
const paintingsService = require('./services/paintingsService');

const app = express();
const PORT = 3000;

const DATA_FILE_PATH = path.join(__dirname, 'data/paintings.json');

paintingsService.init(DATA_FILE_PATH);

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public'))); // Раздача фронтенда из папки public

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/paintings', paintingsRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Маршрут не найден' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});

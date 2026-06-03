const paintingsService = require('../services/paintingsService');

const getAllPaintings = (req, res) => {
    const { title } = req.query;
    const paintings = paintingsService.findAllPaintings(title);
    res.json(paintings);
};

const getPaintingById = (req, res) => {
    const id = parseInt(req.params.id);
    const painting = paintingsService.findOnePainting(id);

    if (!painting) {
        return res.status(404).json({ error: 'Картина не найдена' });
    }

    res.json(painting);
};

const createPainting = (req, res) => {
    const { src, title, shortDescription, description, note } = req.body;

    if (!src || !title) {
        return res.status(400).json({ error: 'Не все обязательные поля заполнены (src, title)' });
    }

    const newPainting = paintingsService.createNewPainting({ src, title, shortDescription, description, note });
    res.status(201).json(newPainting);
};

const updatePainting = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPainting = paintingsService.updatePainting(id, req.body);

    if (!updatedPainting) {
        return res.status(404).json({ error: 'Картина не найдена' });
    }

    res.json(updatedPainting);
};

const deletePainting = (req, res) => {
    const id = parseInt(req.params.id);
    const success = paintingsService.removePainting(id);

    if (!success) {
        return res.status(404).json({ error: 'Картина не найдена' });
    }

    res.status(204).send();
};

module.exports = {
    getAllPaintings,
    getPaintingById,
    createPainting,
    updatePainting,
    deletePainting
};

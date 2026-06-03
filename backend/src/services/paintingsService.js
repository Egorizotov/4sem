const fileService = require('./fileService');

let dataFilePath;

const init = (filePath) => {
    dataFilePath = filePath;
};

const findAllPaintings = (title) => {
    const paintings = fileService.readData(dataFilePath);
    if (title) {
        return paintings.filter(painting =>
            painting.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    return paintings;
};

const findOnePainting = (id) => {
    const paintings = fileService.readData(dataFilePath);
    return paintings.find(painting =>
        painting.id === id
    );
};

const createNewPainting = (paintingData) => {
    const paintings = fileService.readData(dataFilePath);

    const newId = paintings.length > 0
        ? Math.max(...paintings.map(p => p.id)) + 1
        : 1;

    const newPainting = { id: newId, ...paintingData };
    paintings.push(newPainting);
    fileService.writeData(dataFilePath, paintings);

    return newPainting;
};

const updatePainting = (id, paintingData) => {
    const paintings = fileService.readData(dataFilePath);
    const index = paintings.findIndex(p => p.id === id);

    if (index === -1) return null;

    paintings[index] = { ...paintings[index], ...paintingData };
    fileService.writeData(dataFilePath, paintings);

    return paintings[index];
};

const removePainting = (id) => {
    const paintings = fileService.readData(dataFilePath);
    const filteredPaintings = paintings.filter(p => p.id !== id);

    if (filteredPaintings.length === paintings.length) {
        return false;
    }

    fileService.writeData(dataFilePath, filteredPaintings);
    return true;
};

module.exports = {
    init,
    findAllPaintings,
    findOnePainting,
    createNewPainting,
    updatePainting,
    removePainting
};

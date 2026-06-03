class PaintingUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getPaintings() {
        return `${this.baseUrl}/paintings`;
    }

    getPaintingById(id) {
        return `${this.baseUrl}/paintings/${id}`;
    }

    createPainting() {
        return `${this.baseUrl}/paintings`;
    }

    updatePainting(id) {
        return `${this.baseUrl}/paintings/${id}`;
    }

    deletePainting(id) {
        return `${this.baseUrl}/paintings/${id}`;
    }
}

export const paintingUrls = new PaintingUrls();

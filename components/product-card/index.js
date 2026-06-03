export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
      <article class="museum-card">
        <div class="museum-card__image-wrap">
          <img class="museum-card__image" src="${data.src}" alt="${data.title}">
        </div>
        <div class="museum-card__body">
          <h3 class="museum-card__title">${data.title}</h3>
          <p class="museum-card__text">${data.shortDescription}</p>
          <div class="museum-card__actions">
            <button class="museum-button" id="open-card-${data.id}" data-id="${data.id}">
              Подробнее
            </button>
            <button class="museum-button museum-button--danger" id="delete-card-${data.id}" data-id="${data.id}">
              Удалить
            </button>
          </div>
        </div>
      </article>
    `;
  }

  addListeners(data, onOpen, onDelete) {
    document
      .getElementById(`open-card-${data.id}`)
      .addEventListener("click", onOpen);
    document
      .getElementById(`delete-card-${data.id}`)
      .addEventListener("click", () => onDelete(data.id));
  }

  render(data, onOpen, onDelete) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML(data));
    this.addListeners(data, onOpen, onDelete);
  }
}
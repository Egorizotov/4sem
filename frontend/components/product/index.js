export class ProductComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
      <section class="product-layout">
        <img class="product-layout__image" src="${data.src}">
        <div class="product-layout__content">
          <h1 class="product-layout__title">${data.title}</h1>
          <p class="product-layout__description">${data.description}</p>
          <p class="product-layout__note">${data.note}</p>
          <div class="product-layout__actions">
            <button class="museum-button museum-button--secondary" id="product-edit-btn">
              Редактировать карточку
            </button>
          </div>
        </div>
      </section>
    `;
  }

  render(data, onEdit) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML(data));
    document.getElementById("product-edit-btn").addEventListener("click", () => onEdit(data));
  }
}
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
        </div>
      </section>
    `;
  }

  render(data) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML(data));
  }
}
import { HeaderComponent } from "../../components/header/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { EditPage } from "../edit/index.js";
import { ajax } from "../../modules/ajax.js";
import { paintingUrls } from "../../modules/paintingUrls.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.currentQuery = "";
  }

  get pageRoot() {
    return document.getElementById("main-page");
  }

  getHTML() {
    return `
      <div id="main-page">
        <div class="page-shell">
          <section class="hero">
            <p class="hero__eyebrow">Электронный каталог</p>
            <h1 class="hero__title">Коллекция работ художников</h1>
            <p class="hero__text">
              Каталог построен по мотивам виртуального русского музея: общая коллекция, <br>
              карточки картин и отдельная детальная страница для каждой работы.
            </p>
            <button class="museum-button hero__add-btn" id="add-card-btn">+ Добавить карточку</button>
          </section>
          <div id="collection-grid" class="collection-grid"></div>
        </div>
      </div>
    `;
  }

  get collectionRoot() {
    return document.getElementById("collection-grid");
  }

  openCard(e) {
    const cardId = Number(e.target.dataset.id);
    const productPage = new ProductPage(this.parent, cardId);
    productPage.render();
  }

  addCard() {
    const editPage = new EditPage(this.parent, null);
    editPage.render();
  }

  editCard(data) {
    const editPage = new EditPage(this.parent, data);
    editPage.render();
  }

  deleteCard(id) {
    ajax.delete(paintingUrls.deletePainting(id), () => {
      this.renderCards(this.currentQuery);
    });
  }

  renderCards(query = "") {
    this.currentQuery = query;
    const url = query
      ? `${paintingUrls.getPaintings()}?title=${encodeURIComponent(query)}`
      : paintingUrls.getPaintings();

    ajax.get(url, (data) => {
      this.collectionRoot.innerHTML = "";
      data.forEach((item) => {
        const card = new ProductCardComponent(this.collectionRoot);
        card.render(item, this.openCard.bind(this), this.deleteCard.bind(this));
      });
    });
  }

  render() {
    this.parent.innerHTML = "";

    const header = new HeaderComponent(this.parent, (query) => this.renderCards(query));
    header.render();

    this.parent.insertAdjacentHTML("beforeend", this.getHTML());

    document.getElementById("add-card-btn").addEventListener("click", () => this.addCard());

    this.renderCards();
  }
}

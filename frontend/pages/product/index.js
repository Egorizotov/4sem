import { HeaderComponent } from "../../components/header/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { ProductComponent } from "../../components/product/index.js";
import { MainPage } from "../main/index.js";
import { EditPage } from "../edit/index.js";
import { ajax } from "../../modules/ajax.js";
import { paintingUrls } from "../../modules/paintingUrls.js";

export class ProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  get pageRoot() {
    return document.getElementById("product-page");
  }

  getHTML() {
    return `
      <div id="product-page">
        <div class="page-shell"></div>
      </div>
    `;
  }

  get shellRoot() {
    return document.querySelector("#product-page .page-shell");
  }

  clickBack() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";

    const header = new HeaderComponent(this.parent);
    header.render();

    this.parent.insertAdjacentHTML("beforeend", this.getHTML());

    const backButton = new BackButtonComponent(this.shellRoot);
    backButton.render(this.clickBack.bind(this));

    ajax.get(paintingUrls.getPaintingById(this.id), (data) => {
      const product = new ProductComponent(this.shellRoot);
      product.render(data, (paintingData) => {
        const editPage = new EditPage(this.parent, paintingData);
        editPage.render();
      });
    });
  }
}

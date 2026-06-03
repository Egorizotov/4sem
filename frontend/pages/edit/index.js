import { HeaderComponent } from "../../components/header/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { ajax } from "../../modules/ajax.js";
import { paintingUrls } from "../../modules/paintingUrls.js";

export class EditPage {
  constructor(parent, data = null) {
    this.parent = parent;
    this.data = data;
  }

  get shellRoot() {
    return document.getElementById("edit-page-shell");
  }

  getPageHTML() {
    return `
      <div id="edit-page">
        <div class="page-shell">
          <div id="edit-page-shell"></div>
        </div>
      </div>
    `;
  }

  getFormHTML() {
    const d = this.data || {};
    const hasExisting = Boolean(this.data);
    return `
      <div class="edit-form-wrap">
        <h2 class="edit-form__title">${hasExisting ? "Редактирование карточки" : "Новая карточка"}</h2>
        <form class="edit-form" id="edit-form">
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-src">URL изображения</label>
            <input class="edit-form__input" id="edit-src" type="text" value="${d.src || ""}" placeholder="https://..." />
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-title">Название</label>
            <input class="edit-form__input" id="edit-title" type="text" value="${d.title || ""}" placeholder="Название картины" />
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-short">Краткое описание</label>
            <textarea class="edit-form__input edit-form__textarea" id="edit-short" placeholder="Краткое описание">${d.shortDescription || ""}</textarea>
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-description">Описание</label>
            <textarea class="edit-form__input edit-form__textarea edit-form__textarea--tall" id="edit-description" placeholder="Подробное описание">${d.description || ""}</textarea>
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-note">Примечание</label>
            <input class="edit-form__input" id="edit-note" type="text" value="${d.note || ""}" placeholder="Примечание" />
          </div>
          <div class="edit-form__actions">
            <button type="button" class="museum-button" id="save-edit-btn">
              ${hasExisting ? "Редактировать карточку" : "Создать карточку"}
            </button>
          </div>
        </form>
      </div>
    `;
  }

  getFormValues() {
    return {
      src: document.getElementById("edit-src").value.trim(),
      title: document.getElementById("edit-title").value.trim(),
      shortDescription: document.getElementById("edit-short").value.trim(),
      description: document.getElementById("edit-description").value.trim(),
      note: document.getElementById("edit-note").value.trim(),
    };
  }

  goMain() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  addListeners() {
    document.getElementById("save-edit-btn").addEventListener("click", () => {
      const values = this.getFormValues();
      if (this.data) {
        ajax.patch(paintingUrls.updatePainting(this.data.id), values, (data, status) => {
          if (status === 200) {
            this.goMain();
          }
        });
      } else {
        ajax.post(paintingUrls.createPainting(), values, (data, status) => {
          if (status === 201 || status === 200) {
            this.goMain();
          }
        });
      }
    });
  }

  render() {
    this.parent.innerHTML = "";

    const header = new HeaderComponent(this.parent);
    header.render();

    this.parent.insertAdjacentHTML("beforeend", this.getPageHTML());

    const backButton = new BackButtonComponent(this.shellRoot);
    backButton.render(this.goMain.bind(this));

    this.shellRoot.insertAdjacentHTML("beforeend", this.getFormHTML());

    this.addListeners();
  }
}

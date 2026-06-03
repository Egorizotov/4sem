import { MainPage } from "../../pages/main/index.js";

export class HeaderComponent {
  constructor(parent, onSearch) {
    this.parent = parent;
    this.onSearch = onSearch;
  }

  getHTML() {
    return `
      <header class="museum-header">
        <div class="museum-header__inner">
          <div class="museum-logo" id="header-logo" style="cursor:pointer">Виртуальная коллекция</div>
          ${this.onSearch ? `<input id="header-search" class="museum-header__search" type="search" placeholder="Поиск по названию..." />` : ""}
          <nav class="museum-nav">
            <a href="#" id="nav-home">Главная</a>
            <a href="#">Учебный проект</a>
          </nav>
        </div>
      </header>
    `;
  }

  render() {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML());

    const goHome = () => {
      const mainPage = new MainPage(this.parent);
      mainPage.render();
    };

    document.getElementById("header-logo").addEventListener("click", goHome);
    document.getElementById("nav-home").addEventListener("click", (e) => {
      e.preventDefault();
      goHome();
    });

    if (this.onSearch) {
      document.getElementById("header-search").addEventListener("input", (e) => {
        this.onSearch(e.target.value.trim().toLowerCase());
      });
    }
  }
}
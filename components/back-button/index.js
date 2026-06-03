export class BackButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML() {
    return `
      <div class="back-wrap">
        <button id="back-button" class="museum-button">← Назад к коллекции</button>
      </div>
    `;
  }

  addListeners(listener) {
    document
      .getElementById("back-button")
      .addEventListener("click", listener);
  }

  render(listener) {
    this.parent.insertAdjacentHTML("beforeend", this.getHTML());
    this.addListeners(listener);
  }
}
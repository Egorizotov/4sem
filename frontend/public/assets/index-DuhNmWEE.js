(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class u{constructor(e,t){this.parent=e,this.onSearch=t}getHTML(){return`
      <header class="museum-header">
        <div class="museum-header__inner">
          <div class="museum-logo" id="header-logo" style="cursor:pointer">Виртуальная коллекция</div>
          ${this.onSearch?'<input id="header-search" class="museum-header__search" type="search" placeholder="Поиск по названию..." />':""}
          <nav class="museum-nav">
            <a href="#" id="nav-home">Главная</a>
            <a href="#">Учебный проект</a>
          </nav>
        </div>
      </header>
    `}render(){this.parent.insertAdjacentHTML("beforeend",this.getHTML());const e=()=>{new c(this.parent).render()};document.getElementById("header-logo").addEventListener("click",e),document.getElementById("nav-home").addEventListener("click",t=>{t.preventDefault(),e()}),this.onSearch&&document.getElementById("header-search").addEventListener("input",t=>{this.onSearch(t.target.value.trim().toLowerCase())})}}class p{constructor(e){this.parent=e}getHTML(e){return`
      <article class="museum-card">
        <div class="museum-card__image-wrap">
          <img class="museum-card__image" src="${e.src}" alt="${e.title}">
        </div>
        <div class="museum-card__body">
          <h3 class="museum-card__title">${e.title}</h3>
          <p class="museum-card__text">${e.shortDescription}</p>
          <div class="museum-card__actions">
            <button class="museum-button" id="open-card-${e.id}" data-id="${e.id}">
              Подробнее
            </button>
            <button class="museum-button museum-button--danger" id="delete-card-${e.id}" data-id="${e.id}">
              Удалить
            </button>
          </div>
        </div>
      </article>
    `}addListeners(e,t,r){document.getElementById(`open-card-${e.id}`).addEventListener("click",t),document.getElementById(`delete-card-${e.id}`).addEventListener("click",()=>r(e.id))}render(e,t,r){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e)),this.addListeners(e,t,r)}}class h{constructor(e){this.parent=e}getHTML(){return`
      <div class="back-wrap">
        <button id="back-button" class="museum-button">← Назад к коллекции</button>
      </div>
    `}addListeners(e){document.getElementById("back-button").addEventListener("click",e)}render(e){this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.addListeners(e)}}class m{constructor(e){this.parent=e}getHTML(e){return`
      <section class="product-layout">
        <img class="product-layout__image" src="${e.src}">
        <div class="product-layout__content">
          <h1 class="product-layout__title">${e.title}</h1>
          <p class="product-layout__description">${e.description}</p>
          <p class="product-layout__note">${e.note}</p>
          <div class="product-layout__actions">
            <button class="museum-button museum-button--secondary" id="product-edit-btn">
              Редактировать карточку
            </button>
          </div>
        </div>
      </section>
    `}render(e,t){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e)),document.getElementById("product-edit-btn").addEventListener("click",()=>t(e))}}class g{async get(e,t){var r;try{const n=await fetch(e),s=(r=n.headers.get("content-type"))!=null&&r.includes("application/json")?await n.json():null;t(s,n.status)}catch(n){console.error("Ошибка запроса:",n),t(null,0)}}async post(e,t,r){var n;try{const s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=(n=s.headers.get("content-type"))!=null&&n.includes("application/json")?await s.json():null;r(a,s.status)}catch(s){console.error("Ошибка запроса:",s),r(null,0)}}async patch(e,t,r){var n;try{const s=await fetch(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=(n=s.headers.get("content-type"))!=null&&n.includes("application/json")?await s.json():null;r(a,s.status)}catch(s){console.error("Ошибка запроса:",s),r(null,0)}}async delete(e,t){var r;try{const n=await fetch(e,{method:"DELETE"}),s=(r=n.headers.get("content-type"))!=null&&r.includes("application/json")?await n.json():null;t(s,n.status)}catch(n){console.error("Ошибка запроса:",n),t(null,0)}}}const o=new g;class f{constructor(){this.baseUrl="http://localhost:3000"}getPaintings(){return`${this.baseUrl}/paintings`}getPaintingById(e){return`${this.baseUrl}/paintings/${e}`}createPainting(){return`${this.baseUrl}/paintings`}updatePainting(e){return`${this.baseUrl}/paintings/${e}`}deletePainting(e){return`${this.baseUrl}/paintings/${e}`}}const d=new f;class l{constructor(e,t=null){this.parent=e,this.data=t}get shellRoot(){return document.getElementById("edit-page-shell")}getPageHTML(){return`
      <div id="edit-page">
        <div class="page-shell">
          <div id="edit-page-shell"></div>
        </div>
      </div>
    `}getFormHTML(){const e=this.data||{},t=!!this.data;return`
      <div class="edit-form-wrap">
        <h2 class="edit-form__title">${t?"Редактирование карточки":"Новая карточка"}</h2>
        <form class="edit-form" id="edit-form">
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-src">URL изображения</label>
            <input class="edit-form__input" id="edit-src" type="text" value="${e.src||""}" placeholder="https://..." />
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-title">Название</label>
            <input class="edit-form__input" id="edit-title" type="text" value="${e.title||""}" placeholder="Название картины" />
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-short">Краткое описание</label>
            <textarea class="edit-form__input edit-form__textarea" id="edit-short" placeholder="Краткое описание">${e.shortDescription||""}</textarea>
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-description">Описание</label>
            <textarea class="edit-form__input edit-form__textarea edit-form__textarea--tall" id="edit-description" placeholder="Подробное описание">${e.description||""}</textarea>
          </div>
          <div class="edit-form__field">
            <label class="edit-form__label" for="edit-note">Примечание</label>
            <input class="edit-form__input" id="edit-note" type="text" value="${e.note||""}" placeholder="Примечание" />
          </div>
          <div class="edit-form__actions">
            <button type="button" class="museum-button" id="save-edit-btn">
              ${t?"Редактировать карточку":"Создать карточку"}
            </button>
          </div>
        </form>
      </div>
    `}getFormValues(){return{src:document.getElementById("edit-src").value.trim(),title:document.getElementById("edit-title").value.trim(),shortDescription:document.getElementById("edit-short").value.trim(),description:document.getElementById("edit-description").value.trim(),note:document.getElementById("edit-note").value.trim()}}goMain(){new c(this.parent).render()}addListeners(){document.getElementById("save-edit-btn").addEventListener("click",()=>{const e=this.getFormValues();this.data?o.patch(d.updatePainting(this.data.id),e,(t,r)=>{r===200&&this.goMain()}):o.post(d.createPainting(),e,(t,r)=>{(r===201||r===200)&&this.goMain()})})}render(){this.parent.innerHTML="",new u(this.parent).render(),this.parent.insertAdjacentHTML("beforeend",this.getPageHTML()),new h(this.shellRoot).render(this.goMain.bind(this)),this.shellRoot.insertAdjacentHTML("beforeend",this.getFormHTML()),this.addListeners()}}class _{constructor(e,t){this.parent=e,this.id=t}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
      <div id="product-page">
        <div class="page-shell"></div>
      </div>
    `}get shellRoot(){return document.querySelector("#product-page .page-shell")}clickBack(){new c(this.parent).render()}render(){this.parent.innerHTML="",new u(this.parent).render(),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new h(this.shellRoot).render(this.clickBack.bind(this)),o.get(d.getPaintingById(this.id),r=>{new m(this.shellRoot).render(r,s=>{new l(this.parent,s).render()})})}}class c{constructor(e){this.parent=e,this.currentQuery=""}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
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
    `}get collectionRoot(){return document.getElementById("collection-grid")}openCard(e){const t=Number(e.target.dataset.id);new _(this.parent,t).render()}addCard(){new l(this.parent,null).render()}editCard(e){new l(this.parent,e).render()}deleteCard(e){o.delete(d.deletePainting(e),()=>{this.renderCards(this.currentQuery)})}renderCards(e=""){this.currentQuery=e;const t=e?`${d.getPaintings()}?title=${encodeURIComponent(e)}`:d.getPaintings();o.get(t,r=>{this.collectionRoot.innerHTML="",r.forEach(n=>{new p(this.collectionRoot).render(n,this.openCard.bind(this),this.deleteCard.bind(this))})})}render(){this.parent.innerHTML="",new u(this.parent,t=>this.renderCards(t)).render(),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),document.getElementById("add-card-btn").addEventListener("click",()=>this.addCard()),this.renderCards()}}const b=document.getElementById("root"),v=new c(b);v.render();

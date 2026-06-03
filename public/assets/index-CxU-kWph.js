var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=class{constructor(e){this.parent=e}getButtonId(e){return`check-card-${e}`}getHTML(e){return`
            <div class="smesharik-card">
                <div class="img-container">
                    <img src="${e.src}" class="smesharik-img" alt="${e.title}">
                </div>
                
                <div class="card-content">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-subtitle">${e.subtitle}</p>
                    
                    <button class="details-btn" id="${this.getButtonId(e.id)}" data-id="${e.id}">Подробнее</button>
                </div>
            </div>
            `}render(e,t){let n=this.getHTML(e);this.parent.insertAdjacentHTML(`beforeend`,n);let r=document.getElementById(this.getButtonId(e.id));r&&r.addEventListener(`click`,t)}}})),i,a=e((()=>{i=class{constructor(e){this.parent=e}getHTML(e){return`
            <div class="alert alert-primary d-flex align-items-center" role="alert" id="notification">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                <div>
                    ${e}
                </div>
            </div>
            `}render(e){let t=this.getHTML(e);this.parent.insertAdjacentHTML(`beforeend`,t)}}})),o,s=e((()=>{o=class{constructor(e){this.parent=e}addListeners(e){document.getElementById(`update-card-button`).addEventListener(`click`,e)}getHTML(){return`
                <button id="update-card-button" class="btn" type="button">Редактировать</button>
            `}render(e){let t=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,t),this.addListeners(e)}}})),c,l=e((()=>{c=class{constructor(e){this.parent=e}addListeners(e){let t=this.parent.querySelector(`#remove-card-button`);t&&t.addEventListener(`click`,e)}getHTML(){return`
                <button id="remove-card-button" class="btn btn-danger" type="button">Удалить</button>
            `}render(e){let t=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,t),this.addListeners(e)}}})),u,d=e((()=>{a(),s(),l(),u=class{constructor(e){this.parent=e}getHTML(e){return`
                <div class="smesharik-card-detail">
                    <div class="img-container">
                        <img src="${e.src}" class="smesharik-img" alt="${e.title}">
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">${e.title}</h2>
                        <div class="card-text">${e.text}</div>
                        <div id="notification-container"></div>
                    </div>
                    <div id="buttons-container"></div>
                </div>
                <div id="back-button-container"></div>
            `}render(e,t,n){let r=this.getHTML(e);this.parent.insertAdjacentHTML(`beforeend`,r),new i(document.getElementById(`notification-container`)).render(e.notification);let a=document.getElementById(`buttons-container`);new o(a).render(t),new c(a).render(n)}}})),f,p=e((()=>{f=class{constructor(e){this.parent=e}addListeners(e){document.getElementById(`back-button`).addEventListener(`click`,e)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(e){let t=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,t),this.addListeners(e)}}})),m,h=e((()=>{m=class{constructor(e){this.parent=e}getHTML(e){return`
            <header class="d-flex justify-content-between align-items-center border-bottom">
            <ul class="nav nav-pills">
                <li class="nav-item"><a class="nav-link custom-link" aria-current="page" id="home-btn">Главная</a></li>
                <li class="nav-item"><a href="https://ru.wikipedia.org/wiki/Смешарики" class="nav-link custom-link" target="_blank">О мультфильме</a></li>
                <li class="nav-item"><a href="https://www.youtube.com/watch?v=SOvrw-rysuQ" class="nav-link custom-link" target="_blank">Смотреть онлайн</a></li>
            </ul>
            ${e?`
            <div class="search-container">
                <input type="text" class="form-control" id="search" placeholder="Поиск...">
            </div>`:``}
            </header>
            `}render(e,t){let n=this.getHTML(!!t);this.parent.insertAdjacentHTML(`beforeend`,n);let r=document.getElementById(`home-btn`);r&&e&&r.addEventListener(`click`,e);let i=document.getElementById(`search`);i&&t&&i.addEventListener(`input`,t)}}})),g,_=e((()=>{g=class{constructor(e){this.parent=e}getHTML(e){return`<button id="submit-form-button" class="btn btn-primary" type="submit">${e}</button>`}render(e){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML(e))}}})),v,y=e((()=>{v=class{constructor(e){this.parent=e}getHTML(){return`<button id="cancel-button" class="btn" type="button">Отмена</button>`}render(e){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML()),document.getElementById(`cancel-button`).addEventListener(`click`,e)}}})),b,x,S=e((()=>{b=class{async get(e,t){try{let n=await fetch(e);t(await this.parseResponse(n),n.status)}catch(e){console.error(`Ошибка запроса GET:`,e),t(null,0)}}async post(e,t,n){try{let r=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});n(await this.parseResponse(r),r.status)}catch(e){console.error(`Ошибка запроса POST:`,e),n(null,0)}}async patch(e,t,n){try{let r=await fetch(e,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});n(await this.parseResponse(r),r.status)}catch(e){console.error(`Ошибка запроса PATCH:`,e),n(null,0)}}async delete(e,t){try{let n=await fetch(e,{method:`DELETE`});t(await this.parseResponse(n),n.status)}catch(e){console.error(`Ошибка запроса DELETE:`,e),t(null,0)}}async parseResponse(e){let t=await e.text();if(!t)return null;try{return JSON.parse(t)}catch(e){return console.error(`Ошибка парсинга ответа:`,e),null}}},x=new b})),C,w,T=e((()=>{C=class{constructor(){this.baseUrl=`http://localhost:3000`}getCharacters(e=``){let t=new URL(`${this.baseUrl}/characters`);return e&&t.searchParams.set(`title`,e),t.toString()}getCharacterById(e){return`${this.baseUrl}/characters/${e}`}createCharacter(){return`${this.baseUrl}/characters`}removeCharacterById(e){return`${this.baseUrl}/characters/${e}`}updateCharacterById(e){return`${this.baseUrl}/characters/${e}`}},w=new C})),E,D=e((()=>{h(),_(),y(),N(),k(),S(),T(),E=class{constructor(e,t=null){this.parent=e,this.id=t}getHTML(e={}){return`
            <div id="form-page">
                <div class="form-card">
                    <h2 class="form-title">${this.id===null?`Новый персонаж`:`Редактировать персонажа`}</h2>
                    <form id="character-form" novalidate>
                        <div class="form-group">
                            <label class="form-label" for="field-title">Имя</label>
                            <input id="field-title" class="form-control" type="text" value="${e.title||``}" placeholder="Имя персонажа">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="field-subtitle">Подзаголовок</label>
                            <input id="field-subtitle" class="form-control" type="text" value="${e.subtitle||``}" placeholder="Краткое описание">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="field-src">Путь к изображению</label>
                            <input id="field-src" class="form-control" type="text" value="${e.src||``}" placeholder="images/Персонаж.png">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="field-text">Описание</label>
                            <textarea id="field-text" class="form-control form-textarea" placeholder="Полное описание персонажа">${e.text||``}</textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="field-notification">Интересный факт</label>
                            <input id="field-notification" class="form-control" type="text" value="${e.notification||``}" placeholder="Интересный факт">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="field-running-line">Бегущая строка</label>
                            <textarea id="field-running-line" class="form-control form-textarea" placeholder="Текст бегущей строки">${e.running_line||``}</textarea>
                        </div>
                        <div id="form-buttons" class="form-buttons"></div>
                    </form>
                </div>
            </div>
        `}getFormData(){return{title:document.getElementById(`field-title`).value.trim(),subtitle:document.getElementById(`field-subtitle`).value.trim(),src:document.getElementById(`field-src`).value.trim(),text:document.getElementById(`field-text`).value.trim(),notification:document.getElementById(`field-notification`).value.trim(),running_line:document.getElementById(`field-running-line`).value.trim()}}submit(e){e.preventDefault();let t=this.getFormData();this.id===null?x.post(w.createCharacter(),t,(e,t)=>{if(t===201){new M(this.parent).render();return}console.error(`Не удалось создать персонажа`,t,e)}):x.patch(w.updateCharacterById(this.id),t,(e,t)=>{if(t>=200&&t<300){new O(this.parent,this.id).render();return}console.error(`Не удалось обновить персонажа`,t,e)})}cancel(){this.id===null?new M(this.parent).render():new O(this.parent,this.id).render()}renderWithData(e={}){this.parent.innerHTML=``,new m(this.parent).render(this.cancel.bind(this)),this.parent.insertAdjacentHTML(`beforeend`,this.getHTML(e)),document.getElementById(`character-form`).addEventListener(`submit`,this.submit.bind(this));let t=document.getElementById(`form-buttons`);new g(t).render(this.id===null?`Создать`:`Сохранить`),new v(t).render(this.cancel.bind(this))}render(){this.id===null?this.renderWithData():x.get(w.getCharacterById(this.id),(e,t)=>{if(t>=200&&t<300&&e){this.renderWithData(e);return}console.error(`Не удалось получить персонажа`,t,e),this.renderWithData()})}}})),O,k=e((()=>{d(),p(),N(),D(),h(),S(),T(),O=class{constructor(e,t){this.parent=e,this.id=t,this.characterData=null}getData(){x.get(w.getCharacterById(this.id),(e,t)=>{if(t>=200&&t<300&&e){this.characterData=e,this.renderData(e);return}console.error(`Не удалось получить персонажа`,t,e),this.renderNotFound()})}get pageRoot(){return document.getElementById(`character-page`)}getHTML(){return`
                <div id="character-page">
                    <div class="main-content" id="content-container"></div>
                </div>
            `}clickBack(){new M(this.parent).render()}clickUpdateButton(){new E(this.parent,this.id).render()}clickRemoveButton(){window.confirm(`Удалить карточку персонажа?`)&&x.delete(w.removeCharacterById(this.id),(e,t)=>{if(t>=200&&t<300){this.clickBack();return}console.error(`Не удалось удалить персонажа`,t)})}renderData(e){let t=document.getElementById(`content-container`);t&&(t.innerHTML=``,new u(t).render(e,this.clickUpdateButton.bind(this),this.clickRemoveButton.bind(this)),new f(document.getElementById(`back-button-container`)).render(this.clickBack.bind(this)))}renderNotFound(){let e=document.getElementById(`content-container`);e&&(e.innerHTML=`<p>Персонаж не найден.</p>`)}render(){this.parent.innerHTML=``,new m(this.parent).render(this.clickBack.bind(this));let e=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,e),this.getData()}}})),A,j=e((()=>{A=class{constructor(e){this.parent=e}getHTML(){return`<button id="create-card-button" class="btn btn-primary" type="button">Создать карточку</button>`}render(e){this.parent.insertAdjacentHTML(`beforeend`,this.getHTML()),document.getElementById(`create-card-button`).addEventListener(`click`,e)}}})),M,N=e((()=>{r(),k(),D(),j(),h(),S(),T(),M=class{constructor(e){this.parent=e,this.currentItems=[]}get pageRoot(){return document.getElementById(`main-page`)}getHTML(){return`
            <div id="main-page">
                <div class="main-content">
                    <div class="main-title">
                        <h1 class="main-heading">Смешарики</h1>
                        <h4 class="main-subtitle">Лучшая ассоциация с твоим<br>счастливым детством!</h4>
                    </div>
    
                    <div class="content-wrapper">
                        <div class="sidebar">
                            <h2 class="sidebar-title">Выбери своего<br>любимого персонажа</h2>
                            <p class="sidebar-text">
                                Смешарики - анимационный сериал, рассказывающий о приключениях шарообразных существ. Каждую новую серию герои попадают в различные  ситуации
                            </p>
                            <div id="controls-panel"></div>
                        </div> 
                        <div id="cards-container"></div>
                    </div>
    
                </div>
            </div>
            `}getData(e=``){x.get(w.getCharacters(e),(e,t)=>{if(t>=200&&t<300){this.currentItems=Array.isArray(e)?e:[],this.renderData(this.currentItems);return}console.error(`Не удалось получить список персонажей`,t,e),this.currentItems=[],this.renderData([])})}renderData(e){let t=document.getElementById(`cards-container`);t&&(t.innerHTML=``,e.forEach(e=>{new n(t).render(e,this.clickCard.bind(this))}))}clickCard(e){let t=e.target.dataset.id;new O(this.parent,t).render()}clickCreateButton(){new E(this.parent).render()}searchListener(e){let t=e.target.value.trim();this.getData(t)}render(){this.parent.innerHTML=``,new m(this.parent).render(this.render.bind(this),this.searchListener.bind(this));let e=this.getHTML();this.parent.insertAdjacentHTML(`beforeend`,e),new A(document.getElementById(`controls-panel`)).render(this.clickCreateButton.bind(this)),this.getData()}}}));t((()=>{N(),new M(document.getElementById(`root`)).render()}))();
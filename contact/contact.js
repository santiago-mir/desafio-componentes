function contact() {
  function contact(element) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = ` <section class="contact">
        <form class="form">
          <h1 class="form__title">Contacto</h1>
          <div class="form__main-conteiner">
            <label class="form__label" for="name">
              <span>NOMBRE</span>
            </label>
            <input class="form__input" name="name" id="name" type="text" />
      
            <label class="form__label" for="email">
              <span>EMAIL</span>
            </label>
            <input class="form__input" name="email" id="email" type="email" />
      
            <label class="form__label" for="message">
              <span>MENSAJE</span>
            </label>
            <textarea class="form__textarea" name="message" id="message">
            </textarea>
      
            <button class="form__button">Enviar</button>
          </div>
        </form>
      </section>
        `;

    element.appendChild(componentEl);
  }

  function main() {
    const contenedor = document.querySelector(".contenedor-contact");
    contact(contenedor);
  }

  main();
}

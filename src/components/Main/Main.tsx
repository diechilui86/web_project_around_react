import avatar from '../../images/avatar.jpg'

function Main() {
   return (

    <main className="content">
        <section className="profile page__section">
          <button
            aria-label="Editar avatar"
            className="profile__image-button"
            type="button"
          >
            <img className="profile__image" src={avatar} alt="Avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button
              aria-label="Editar perfil"
              className ="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description"></p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            <template id="card-template">
              <li className="card">
                <img className="card__image" src="#" alt="" />
                <button
                  aria-label="Eliminar tarjeta"
                  className="card__delete-button"
                  type="button"
                ></button>
                <div className="card__description">
                  <h2 className="card__title"></h2>
                  <button
                    aria-label="Botón Me gusta"
                    className="card__like-button"
                    type="button"
                  ></button>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>
   );
 };
 
 export default Main;
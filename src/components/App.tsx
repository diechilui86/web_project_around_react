import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

function App() {

  return (
    <>
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      
      <div className="popup" id="edit-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__form" id="edit-profile-form" name="editProfile">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nombre"
              type="text"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="name-input-error popup__input-error"></span>
            <input
              className="popup__input popup__input_type_description"
              name="description"
              placeholder="Acerca de mí"
              type="text"
              minLength={2}
              maxLength={200}
              required
            />
            <span className="description-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit" disabled>
              Guardar
            </button>
          </form>
        </div>
      </div>
      <div className="popup" id="new-card-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Nuevo lugar</h3>
          <form className="popup__form" id="new-card-form" name="newCard">
            <input
              className="popup__input popup__input_type_card-name"
              name="place-name"
              placeholder="Título"
              required
              type="text"
              minLength={2}
              maxLength={30}
            />
            <span className="place-name-input-error popup__input-error"></span>
            <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="link-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit" disabled>
              Crear
            </button>
          </form>
        </div>
      </div>
      <div className="popup" id="image-popup">
        <div className="popup__content popup__content_content_image">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <img alt="" className="popup__image" src="#" />
          <p className="popup__caption"></p>
        </div>
      </div>
      <div className="popup" id="confirm-popup">
        <div className="popup__content popup__content_no-input">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">¿Estás seguro?</h3>
          <button className="button popup__button" type="button">Sí</button>
        </div>
      </div>
      <div className="popup" id="avatar-popup">
        <div className="popup__content popup__content_one-input">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Cambiar foto de perfil</h3>
          <form className="popup__form" id="avatar-form" name="avatarForm">
            <input
              className="popup__input popup__input_type_url popup__input_avatar-url"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="link-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

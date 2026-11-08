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
 
    </div>
    </>
  )
}

export default App

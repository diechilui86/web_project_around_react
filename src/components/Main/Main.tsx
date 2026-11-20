import { useContext } from "react";
import type { PopupConfig, CardData } from "../../types/types";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";
import EditProfile from "./Popup/EditProfile/EditProfile";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import Card from "./Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

type MainProps = {
  cards: CardData[];
  handleOpenPopup: (popup: PopupConfig) => void;
  handleClosePopup: () => void;
  handleCardLike: (card: CardData) => void;
  handleCardDelete: (card: CardData) => void;
  popup: PopupConfig | null;
};

export default function Main(props: MainProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup: PopupConfig = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };
  const editProfilePopup: PopupConfig = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup: PopupConfig = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <button
          aria-label="Editar avatar"
          className="profile__image-button"
          type="button"
          onClick={() => props.handleOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt={currentUser?.name}
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => props.handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => props.handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={props.handleOpenPopup}
              handleCardLike={props.handleCardLike}
              handleCardDelete={props.handleCardDelete}
            />
          ))}
        </ul>
      </section>
      {props.popup && (
        <Popup
          onClose={props.handleClosePopup}
          title={props.popup.title ?? ""}
          isOpen={props.popup !== null}
        >
          {props.popup.children}
        </Popup>
      )}
    </main>
  );
}

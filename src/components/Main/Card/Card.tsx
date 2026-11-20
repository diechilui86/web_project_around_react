import type { CardData, PopupConfig } from "../../../types/types.ts";
import ImagePopup from "../Popup/ImagePopup/ImagePopup.tsx";
import ConfirmationPopup from "../Popup/ConfirmationPopup/ConfirmationPopup";

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
  handleCardLike: (card: CardData) => void;
  handleCardDelete: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { name, link } = props.card;
  const imageComponent: PopupConfig = {
    children: <ImagePopup card={props.card} />,
  };
  const cardLikeButtonClassName = `card__like-button ${
    props.card.isLiked ? "card__like-button_is-active" : ""
  }`;
  const confirmationPopup: PopupConfig = {
    title: "¿Estás seguro?",
    children: (
      <ConfirmationPopup
        card={props.card}
        handleCardDelete={props.handleCardDelete}
      />
    ),
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => props.handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
        onClick={() => props.handleOpenPopup(confirmationPopup)}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => props.handleCardLike(props.card)}
        ></button>
      </div>
    </li>
  );
}

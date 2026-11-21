import type { CardData, PopupConfig } from "../../../../types/types.ts";
import ImagePopup from "../Popup/ImagePopup/ImagePopup.tsx";
import RemoveCard from "../Popup/RemoveCard/RemoveCard.tsx";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.tsx";

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
  handleCardLike: (card: CardData) => void;
  handleCardDelete: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwnCard = currentUser?._id === props.card.owner;
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
      <RemoveCard card={props.card} handleCardDelete={props.handleCardDelete} />
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
      {isOwnCard && (
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
          onClick={() => props.handleOpenPopup(confirmationPopup)}
        />
      )}
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

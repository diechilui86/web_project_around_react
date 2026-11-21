import type { CardData } from "../../../../../types/types.ts";

type RemoveCardProps = {
  card: CardData;
  handleCardDelete: (card: CardData) => void;
};

export default function RemoveCard(props: RemoveCardProps): React.JSX.Element {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleCardDelete(props.card);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="popup__form"
      id="remove-card-form"
      name="removeCard"
    >
      <button className="button popup__button" type="submit">
        Sí
      </button>
    </form>
  );
}

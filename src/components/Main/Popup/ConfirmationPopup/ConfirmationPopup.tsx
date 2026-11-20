import type { CardData } from "../../../../types/types.ts";

type ConfirmationPopupProps = {
  card: CardData;
  handleCardDelete: (card: CardData) => void;
};

export default function ConfirmationPopup(
  props: ConfirmationPopupProps,
): React.JSX.Element {
  return (
    <>
      <button
        className="button popup__button"
        type="button"
        onClick={() => props.handleCardDelete(props.card)}
      >
        Sí
      </button>
    </>
  );
}

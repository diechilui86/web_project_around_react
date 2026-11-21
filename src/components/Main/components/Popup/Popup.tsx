import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

type PopupProps = {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

export default function Popup(props: PopupProps): React.JSX.Element {
  const { title, children, onClose, isOpen } = props;
  const { isSaving } = useContext(CurrentUserContext);
  return (
    <div className={`popup ${isOpen ? "popup_is-opened" : ""}`}>
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
          disabled={isSaving}
        ></button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

import { useRef, useContext, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar, isSaving } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);

  const [linkError, setLinkError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (avatarRef.current) {
      handleUpdateAvatar({ avatar: avatarRef.current.value });
    }
  };

  return (
    <form
      className="popup__form"
      id="avatar-form"
      name="avatarForm"
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className={`popup__input popup__input_type_url popup__input_avatar-url ${
          linkError ? " popup__input_type_error" : ""
        }`}
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        onChange={(event) => {
          const input = event.currentTarget;
          setLinkError(input.validationMessage);
          setIsFormValid(input.form?.checkValidity() ?? false);
        }}
      />
      <span
        className={`link-input-error popup__input-error${
          linkError ? " popup__input-error_active" : ""
        }`}
      >
        {linkError}
      </span>
      <button
        className={`button popup__button${!isFormValid ? " popup__button_disabled" : ""}`}
        type="submit"
        disabled={isSaving || !isFormValid}
      >
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

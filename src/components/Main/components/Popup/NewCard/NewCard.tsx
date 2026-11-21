import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit, isSaving } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddPlaceSubmit({ name, link });
  };

  return (
    <form
      className="popup__form"
      id="new-card-form"
      name="newCard"
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={(event) => {
          const input = event.currentTarget;
          setName(input.value);
          setNameError(input.validationMessage);
          setIsFormValid(input.form?.checkValidity() ?? false);
        }}
        className={`popup__input popup__input_type_card-name${
          nameError ? " popup__input_type_error" : ""
        }`}
        name="place-name"
        placeholder="Título"
        required
        type="text"
        minLength={2}
        maxLength={30}
      />
      <span
        className={`place-name-input-error popup__input-error${
          nameError ? " popup__input-error_active" : ""
        }`}
      >
        {nameError}
      </span>
      <input
        value={link}
        onChange={(event) => {
          const input = event.currentTarget;
          setLink(input.value);
          setLinkError(input.validationMessage);
          setIsFormValid(input.form?.checkValidity() ?? false);
        }}
        className={`popup__input popup__input_type_url${
          linkError ? " popup__input_type_error" : ""
        }`}
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
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
        {isSaving ? "Guardando..." : "Crear"}
      </button>
    </form>
  );
}

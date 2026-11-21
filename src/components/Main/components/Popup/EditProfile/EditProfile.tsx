import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser, isSaving } =
    useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [description, setDescription] = useState(currentUser?.about || "");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="popup__form"
      id="edit-profile-form"
      name="editProfile"
    >
      <input
        value={name}
        onChange={(event) => {
          const input = event.currentTarget;
          setName(input.value);
          setNameError(input.validationMessage);
          setIsFormValid(input.form?.checkValidity() ?? false);
        }}
        className={`popup__input popup__input_type_name${
          nameError ? " popup__input_type_error" : ""
        }`}
        name="name"
        placeholder="Nombre"
        type="text"
        minLength={2}
        maxLength={40}
        required
      />
      <span
        className={`name-input-error popup__input-error${
          nameError ? " popup__input-error_active" : ""
        }`}
      >
        {nameError}
      </span>
      <input
        value={description}
        onChange={(event) => {
          const input = event.currentTarget;
          setDescription(input.value);
          setDescriptionError(input.validationMessage);
          setIsFormValid(input.form?.checkValidity() ?? false);
        }}
        className={`popup__input popup__input_type_description${
          descriptionError ? " popup__input_type_error" : ""
        }`}
        name="description"
        placeholder="Acerca de mí"
        type="text"
        minLength={2}
        maxLength={200}
        required
      />
      <span
        className={`description-input-error popup__input-error${
          descriptionError ? " popup__input-error_active" : ""
        }`}
      >
        {descriptionError}
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

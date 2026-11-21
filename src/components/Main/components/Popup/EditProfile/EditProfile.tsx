import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser, isSaving } =
    useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [description, setDescription] = useState(currentUser?.about || "");

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
        onChange={(event) => setName(event.target.value)}
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        minLength={2}
        maxLength={40}
        required
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        minLength={2}
        maxLength={200}
        required
      />
      <span className="description-input-error popup__input-error"></span>
      <button
        className="button popup__button"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}

export default function EditProfile(): React.JSX.Element {
  return (
    <form className="popup__form" id="edit-profile-form" name="editProfile">
        <input
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
            className="popup__input popup__input_type_description"
            name="description"
            placeholder="Acerca de mí"
            type="text"
            minLength={2}
            maxLength={200}
            required
        />
        <span className="description-input-error popup__input-error"></span>
        <button className="button popup__button" type="submit" disabled>
            Guardar
        </button>
    </form>
  );
}
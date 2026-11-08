export default function EditAvatar(): React.JSX.Element {
  return (
    <form className="popup__form" id="avatar-form" name="avatarForm">
        <input
            className="popup__input popup__input_type_url popup__input_avatar-url"
            name="link"
            placeholder="Enlace a la imagen"
            required
            type="url"
        />
        <span className="link-input-error popup__input-error"></span>
        <button className="button popup__button" type="submit">Guardar</button>
    </form>
  );
}
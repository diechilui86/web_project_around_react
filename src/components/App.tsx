import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

import { useEffect, useState } from "react";
import { api } from "../utils/api.ts";
import CurrentUserContext from "../contexts/CurrentUserContext";
import type {
  UserData,
  CardData,
  PopupConfig,
  CardFormData,
  UserFormData,
} from "../types/types.ts";

function App() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const handleCardLike = async (card: CardData) => {
    const isLiked = card.isLiked;
    try {
      const apiCall = isLiked
        ? api.removeLike(card._id)
        : api.addLike(card._id);
      const newCard = await apiCall;
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardDelete = async (card: CardData) => {
    try {
      await api.deleteCard(card._id);
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id),
      );
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const [userData, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards(),
        ]);
        setCurrentUser(userData);
        setCards(initialCards);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  function handleOpenPopup(popup: PopupConfig) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateUser = async (userData: UserFormData) => {
    try {
      const userInfo = await api.updateUserInfo({
        name: userData.name,
        about: userData.about,
      });
      setCurrentUser(userInfo);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAvatar = async ({ avatar }: { avatar: string }) => {
    try {
      const updatedUser = await api.updateAvatar(avatar);
      setCurrentUser(updatedUser);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddPlaceSubmit = async (data: CardFormData) => {
    try {
      const newCard = await api.createCard(data);
      setCards((state) => [newCard, ...state]);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

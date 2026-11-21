import type { UserData } from "./UserData";
import type { CardFormData, UserFormData } from "../types/types";

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (userData: UserFormData) => Promise<void>;
  handleUpdateAvatar: (data: { avatar: string }) => Promise<void>;
  handleAddPlaceSubmit: (cardData: CardFormData) => void;
}

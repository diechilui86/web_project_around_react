export interface CardFormData {
  name: string;
  link: string;
}

export interface UserFormData {
  name: string;
  about: string;
}

export interface ConfigObject {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface ApiOptions {
  baseUrl: string;
  headers: Record<string, string>;
}

export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
};

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (userData: UserFormData) => Promise<void>;
  handleUpdateAvatar: (data: { avatar: string }) => Promise<void>;
  handleAddPlaceSubmit: (cardData: CardFormData) => void;
}

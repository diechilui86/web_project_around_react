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

export interface ApiOptions {
  baseUrl: string;
  headers: Record<string, string>;
}

export type { UserData } from "../interfaces/UserData";
export type { CardData } from "../interfaces/CardData";
export type { CurrentUserContextType } from "../interfaces/CurrentUserContextType";
export type {
  ModalData,
  ModalData as PopupConfig,
} from "../interfaces/ModalData";

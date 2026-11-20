import type {
  CardFormData,
  UserData,
  ApiOptions,
  UserFormData,
  CardData,
} from "../types/types.ts";

export class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ baseUrl, headers }: ApiOptions) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private async checkResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return await res.json();
    }
    throw new Error(`Error: ${res.status}`);
  }

  async getUserInfo(): Promise<UserData> {
    const res: Response = await fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    });
    return await this.checkResponse<UserData>(res);
  }

  async getInitialCards(): Promise<CardData[]> {
    const res: Response = await fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    });
    return await this.checkResponse<CardData[]>(res);
  }

  async updateUserInfo(userData: UserFormData): Promise<UserData> {
    const res: Response = await fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    });
    return await this.checkResponse<UserData>(res);
  }

  async createCard(newCardData: CardFormData): Promise<CardData> {
    const res: Response = await fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: newCardData.name,
        link: newCardData.link,
      }),
    });
    return await this.checkResponse<CardData>(res);
  }

  async updateAvatar(avatarUrl: string): Promise<UserData> {
    const res: Response = await fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    });
    return await this.checkResponse<UserData>(res);
  }

  async toggleLike(cardId: string, isLiked: boolean): Promise<CardData> {
    const res: Response = await fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this.headers,
    });
    return await this.checkResponse<CardData>(res);
  }

  async deleteCard(cardId: string): Promise<void> {
    const res: Response = await fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    });
    return await this.checkResponse<void>(res);
  }

  addLike(cardId: string): Promise<CardData> {
    return this.toggleLike(cardId, false);
  }

  removeLike(cardId: string): Promise<CardData> {
    return this.toggleLike(cardId, true);
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "95e73e25-ad72-41b0-8aef-314b7db440e0",
    "Content-Type": "application/json",
  },
});

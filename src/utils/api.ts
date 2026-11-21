import type {
  CardFormData,
  UserData,
  ApiOptions,
  UserFormData,
  CardData,
} from "../types/types.ts";

class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ baseUrl, headers }: ApiOptions) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private async checkResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Error: ${response.status}`);
  }

  async getUserInfo(): Promise<UserData> {
    const response: Response = await fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    });
    return await this.checkResponse<UserData>(response);
  }

  async getInitialCards(): Promise<CardData[]> {
    const response: Response = await fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    });
    return await this.checkResponse<CardData[]>(response);
  }

  async updateUserInfo(userData: UserFormData): Promise<UserData> {
    const response: Response = await fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    });
    return await this.checkResponse<UserData>(response);
  }

  async createCard(newCardData: CardFormData): Promise<CardData> {
    const response: Response = await fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: newCardData.name,
        link: newCardData.link,
      }),
    });
    return await this.checkResponse<CardData>(response);
  }

  async updateAvatar(avatarUrl: string): Promise<UserData> {
    const response: Response = await fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    });
    return await this.checkResponse<UserData>(response);
  }

  async toggleLike(cardId: string, isLiked: boolean): Promise<CardData> {
    const response: Response = await fetch(
      `${this.baseUrl}/cards/${cardId}/likes`,
      {
        method: isLiked ? "DELETE" : "PUT",
        headers: this.headers,
      },
    );
    return await this.checkResponse<CardData>(response);
  }

  async deleteCard(cardId: string): Promise<void> {
    const response: Response = await fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
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

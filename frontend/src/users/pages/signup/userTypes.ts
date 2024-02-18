export type TokenType = {
  _id: string;
  /* isClient: boolean; */ isAdmin: boolean;
};

export type LoginType = { email: string; password: string };

export type SignupType = {
  name: string;
  email: string;
  phone: number;
  password: string;
  /* imgUrl?: {
    url: string;
    alt: string;
  }; */
};

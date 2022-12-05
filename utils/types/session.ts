export type Session = {
  session: SessionValue;
};

export type SessionValue = {
  expires: string | null | undefined;
  user: User;
};

export type User = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
};

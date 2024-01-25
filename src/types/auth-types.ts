export type LoginCredentialsType = {
  email: string;
  password: string;
};

export type RegistrationCredentialsType = {
  name: string;
} & LoginCredentialsType;

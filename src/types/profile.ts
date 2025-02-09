export type Profiles = Record<string, Profile>;

export enum ProfileType {
  PERSONAL = 'Pessoal',
  CAREGIVING = 'Cuidador',
}

export type Profile = {
  id: string;
  type: ProfileType;
  dependents: Profile[];
  name: string;
  color: string;
};

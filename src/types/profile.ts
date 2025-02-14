export type Profiles = Record<string, Profile>;

export type Profile = {
  id: string;
  type: ProfileType;
  dependents: string[];
  name: string;
  color: string;
  isDependent: boolean;
  isCaregiving: boolean;
  caregivingId?: string;
};

export enum ProfileType {
  PERSONAL = 'Pessoal',
  CAREGIVING = 'Cuidador',
  DEPENDENT = 'Dependente',
}

export type FormDataType = {
  name: string;
  lastName: string;
  id: number;
  dep: string;
  city: string;
  phone: string;
  email: string;
  habeasData: boolean;
};
export type UserDataType = FormDataType & {
  code: string;
};
export type DataApiType = {
  region: string;
  c_digo_dane_del_departamento: string;
  departamento: string;
  c_digo_dane_del_municipio: string;
  municipio: string;
};

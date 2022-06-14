import { PontosTuristicosModel } from '../models/pontos-turisticos';

export interface PontosTuristicosRead {
  all: () => Promise<PontosTuristicosModel[]>;
  byId: (id: string) => Promise<PontosTuristicosModel>;
}

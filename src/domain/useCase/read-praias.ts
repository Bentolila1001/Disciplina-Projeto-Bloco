import { PraiasModel } from '../models/praias';

export interface PraiasRead {
  all: () => Promise<PraiasModel[]>;
  byId: (id: string) => Promise<PraiasModel>;
}

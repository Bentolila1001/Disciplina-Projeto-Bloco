import { DelegaciasModel } from '../models/delegaciais';

export interface DelegaciasRead {
  all: () => Promise<DelegaciasModel[]>;
  byId: (id: string) => Promise<DelegaciasModel>;
}

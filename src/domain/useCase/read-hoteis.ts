import { HoteisModel } from '../models/hoteis';

export interface HoteisRead {
  all: () => Promise<HoteisModel[]>;
  byId: (id: string) => Promise<HoteisModel>;
}

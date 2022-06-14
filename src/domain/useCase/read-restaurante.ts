import { RestauranteModel } from '../models/restaurantes';

export interface RestauranteRead {
  all: () => Promise<RestauranteModel[]>;
  byId: (id: string) => Promise<RestauranteModel>;
}

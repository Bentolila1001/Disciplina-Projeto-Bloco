export type PraiasModel = {
  name: string;
  description: string;
  text: string;
  geoResult: {
    point: {
      lat: number;
      lng: number;
    };
  };
  files: string[];
};

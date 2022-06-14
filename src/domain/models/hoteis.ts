export type HoteisModel = {
  name: string;
  description: string;
  text: {
    short_text: string;
    text: string;
  };
  geoResult: {
    point: {
      lat: number;
      lng: number;
    };
  };
  files: {
    file: string;
  };
  contact: {
    email: string;
    site: string;
  };
};

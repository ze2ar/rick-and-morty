export type TOrigin = {
  name: string;
  url: string;
}

export type TLocation = {
  name: string;
  url: string;
}

export type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: TOrigin;
  location: TLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
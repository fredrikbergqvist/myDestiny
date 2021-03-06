export interface ICollectionData {
  inCollection: boolean;
  dice?: number;
  quantity?: number;
}

export interface ICard {
  name: string;
  code: string;
  cost?: number;
  health: number;
  points: string;
  imagesrc: string;
  sides?: string[];
  set_code: string;
  set_name: string;
  type_name: string;
  type_code: string;
  subtype_code?: string;
  subtype_name?: string;
  faction_code: string;
  faction_name: string;
  affiliation_code: string;
  affiliation_name: string;
  rarity_code: string;
  rarity_name: string;
  position: number;
  ttscardid: string;
  subtitle: string;
  text: string;
  deck_limit: number;
  flavor: string;
  illustrator: string;
  is_unique: boolean;
  has_die: boolean;
  has_errata: boolean;
  url: string;
  label: string;
  cp: number;
  collection: ICollectionData;
}

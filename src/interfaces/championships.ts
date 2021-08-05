//declaracao do que sera passado na interface
export interface ChampionshipFlags {
  oitenta: boolean;
  noventa: boolean;
  doismil: boolean;
}

export interface Championship extends ChampionshipFlags {
  id?: string;
  year: string;
  champion: string;
  vice: string;
}

// estado inicial do form vazio
export const emptyChampionship: Championship = {
  year: '',
  champion: '',
  vice: '',
  oitenta: false,
  noventa: false,
  doismil: false,
};

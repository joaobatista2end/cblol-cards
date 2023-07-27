export interface Player {
  nome: string;
  rota: string;
  imagem: string;
}

export interface Team {
  [nomeTime: string]: Player[];
}

export interface CBLOL2021 {
  "paiN Gaming": Player[];
  INTZ: Player[];
  FURIA: Player[];
  Vorax: Player[];
  Flamengo: Player[];
  LOUD: Player[];
  "RED Canids": Player[];
  Cruzeiro: Player[];
  "KaBuM!": Player[];
  Rensga: Player[];
  "Havan Liberty": Player[];
}

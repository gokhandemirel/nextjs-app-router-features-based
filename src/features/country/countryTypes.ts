export interface CountryState {
  list: Country[];
}

export interface Country {
  alpha3: string;
  capital: string;
  code: string;
  dialCode: string;
  emoji: string;
  geo: {
    lat: number;
    long: number;
  };
  name: string;
  region: string;
  timezones: string[];
  unicode: string;
}
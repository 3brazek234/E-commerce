export interface CountryCityResponse {
  error: boolean;
  msg: string;
  data: CountryWithCities[];
}

export interface CountryWithCities {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
}

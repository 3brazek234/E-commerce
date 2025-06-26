import axios from "axios";
import type { CountryCityResponse } from "../types/interfaces";

const getCountry = async (): Promise<CountryCityResponse> => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );
    return response.data;
  } catch {
    throw new Error();
  }
};

export default getCountry;

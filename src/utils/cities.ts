import citiesData from "../../data/cities.json";

export interface CityData {
  name: string;
  state: string;
  description: string;
  population: string;
  area: string;
  founded: string;
  county: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  attractions: string[];
  services: string[];
}

export interface CityNavItem {
  title: string;
  href: string;
}

export const getCitiesData = (): CityNavItem[] => {
  try {
    return Object.keys(citiesData).map((citySlug) => ({
      title: (citiesData as Record<string, CityData>)[citySlug].name,
      href: `/locations/${(citiesData as Record<string, CityData>)[
        citySlug
      ].name.toLowerCase()}`,
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export const getAllCitiesData = (): Record<string, CityData> => {
  return citiesData as Record<string, CityData>;
};

export const getCityBySlug = (slug: string): CityData | null => {
  const cities = citiesData as Record<string, CityData>;
  const cityEntry = Object.entries(cities).find(
    ([, city]) => city.name.toLowerCase() === slug.toLowerCase(),
  );
  return cityEntry ? cityEntry[1] : null;
};

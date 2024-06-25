import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

import { JAWA_TIMUR_PROVINCE_ID } from '@/constant/common';

import { Location } from '@/types/location';

export function useGetJawaTimurCities() {
  const url = `https://ibnux.github.io/data-indonesia/kabupaten/${JAWA_TIMUR_PROVINCE_ID}.json`;

  const result = useQuery<Location[]>(
    ['city'],
    async () => {
      const { data } = await Axios.get(url);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return result;
}

export function useGetSubdistricts(cityId?: string) {
  const url = `https://ibnux.github.io/data-indonesia/kecamatan/${cityId}.json`;

  const result = useQuery<Location[]>(
    ['subdistrict', cityId],
    async () => {
      const { data } = await Axios.get(url);
      return data;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!cityId,
    },
  );

  return result;
}

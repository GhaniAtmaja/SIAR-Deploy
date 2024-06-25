import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import get from 'lodash.get';
import * as React from 'react';

import SearchableSelectInput, {
  SearchableSelectInputProps,
} from '@/components/forms/SearchableSelectInput';

import { ApiError } from '@/types/api';

type ServerSelectInputProps = {
  route: string;
  valueGetter?: string;
  labelGetter?: string;
} & Omit<SearchableSelectInputProps, 'options'>;

export default function ServerSelectInput({
  route,
  valueGetter = 'id',
  labelGetter = 'name',
  ...rest
}: ServerSelectInputProps) {
  //#region  //*=========== Get Options ===========

  const { data: optionsData, isLoading } = useQuery<
    Array<object>,
    AxiosError<ApiError>
  >([route]);
  const options =
    optionsData?.map((item) => ({
      value: get(item, valueGetter) + '',
      label: get(item, labelGetter) + '',
    })) || [];
  //#endregion  //*======== Get Options ===========

  return (
    <SearchableSelectInput
      options={options}
      noOptionsMessage={() =>
        isLoading ? 'Getting options...' : 'No option found'
      }
      {...rest}
    />
  );
}

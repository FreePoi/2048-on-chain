import { useCallback } from 'react';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';

import { useCustomSearchParams } from './useCustomSearchParams';

// TODO: support multiple values
export function formatQueryParams(params: Record<string, string>, keep: Record<string, boolean>) {
  const s = Object.entries(keep)
    .filter(([key, value]) => value && params[key] !== undefined)
    .map(([key]) => `${key}=${params[key]}`)
    .join('&');

  return s ? `?${s}` : '';
}

export function useReservedParamsNavigate() {
  const navigate = useNavigate();
  const { searchParms } = useCustomSearchParams();

  return useCallback(
    (to: To, keep: Record<string, boolean>, options?: NavigateOptions | undefined) => {
      let _to: To = '';

      if (typeof to === 'string') {
        const queryParams = formatQueryParams(searchParms, keep);

        _to = `${to}${queryParams}`;
      } else {
        const baseParams = Object.fromEntries(new URLSearchParams(to.search));
        const queryParams = formatQueryParams({ ...searchParms, ...baseParams }, keep);

        _to = {
          pathname: to.pathname,
          hash: to.hash,
          search: queryParams,
        };
      }

      navigate(_to, options);
    },
    [navigate, searchParms]
  );
}

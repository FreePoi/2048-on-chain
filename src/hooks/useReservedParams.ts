import { useCustomSearchParams } from './useCustomSearchParams';
import { formatQueryParams } from './useReservedParamsNavigate';

export const useReservedParams = (keep: Record<string, boolean>) => {
  const { searchParms } = useCustomSearchParams();
  const queryParams = formatQueryParams(searchParms, keep);

  return queryParams;
};

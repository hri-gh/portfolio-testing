"use client"

import useQuery from '@/hooks/use-query';

export const usePublicProfiles = () => {

  const [data, error, loading] = useQuery('/api/public-profiles')

  return [data, error, loading]
}

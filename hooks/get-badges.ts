"use client"

import useQuery from '@/hooks/use-query';

export const useBadges = () => {

  const [data, error, loading] = useQuery('/api/badges')

  return [data, error, loading]
}

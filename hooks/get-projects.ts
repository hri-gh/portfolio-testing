"use client"

import useQuery from '@/hooks/use-query';

export const useProjects = () => {

  const [data, error, loading] = useQuery('/api/projects')

  return [data, error, loading]
}

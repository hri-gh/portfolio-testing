"use client"

import useQuery from '@/hooks/use-query';

export const useSkills = () => {

  const [data, error, loading] = useQuery('/api/skills')

  return [data, error, loading]
}


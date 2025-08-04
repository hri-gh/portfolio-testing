"use client"

import useQuery from '@/hooks/use-query';

export const useAboutMe = () => {

  const [data, error, loading] = useQuery('/api/about-me')

  return [data, error, loading]
}

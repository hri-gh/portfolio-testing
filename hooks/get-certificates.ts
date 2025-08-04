"use client"

import useQuery from '@/hooks/use-query';

export const useCertificates = () => {

    const [data, error, loading] = useQuery('/api/certificates')

    return [data, error, loading]
}

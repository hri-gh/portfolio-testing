// Custom method
import { useEffect, useState } from 'react';
import axios from 'axios';


const useQuery = (urlPath: any) => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    (async () => {
      const cancelToken = axios.CancelToken.source()
      try {
        setLoading(true)
        setError(null)
        // await new Promise(resolve => setTimeout(resolve, 5000000));
        const response = await axios.get(urlPath, { cancelToken: cancelToken.token })
        setData(response.data)

        setLoading(false)
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log('Cencelled');
        } else {
          setLoading(false)
          setError(error.message)
        }
      }

      return () => {
        cancelToken.cancel();
      } // clean up function to prevent memory leaks

    })()

  }, [urlPath])

  return [data, error, loading]
}


export default useQuery

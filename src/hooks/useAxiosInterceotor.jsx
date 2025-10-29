import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { instance } from 'utls/instances';

const useAxiosInterceotor = () => {
  const { auth } = useSelector((state) => state);
  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        setIsApiLoading(true);
        config.headers['retryCall'] = 1;
        if (!config.headers['Authorization']) {
          config.headers[
            'Authorization'
          ] = `Bearer ${auth?.userInfo?.accessToken}`;
        }
        return config;
      },
      (error) => {
        setIsApiLoading(false);
        toast.error(
          error?.response?.data?.errors?.[0] ||
            error?.response?.data?.errorMessage ||
            error.message
        );
        return Promise.reject(error);
      }
    );

    const responseIntercept = instance.interceptors.response.use(
      function (response) {
        setIsApiLoading(false);
        return response;
      },
      async function (error) {
        setIsApiLoading(false);
        const prevRequest = error.config;
        if (+prevRequest?.headers['retryCall'] === 1)
          toast.error(
            error?.response?.data?.errors?.[0] ||
              error?.response?.data?.errorMessage ||
              error.message
          );
        if (prevRequest?.headers) prevRequest.headers['retryCall'] = 2;
        return Promise.reject(error);
      }
    );

    return () => {
      setIsApiLoading(false);
      instance.interceptors.request.eject(requestIntercept);
      instance.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return { instance, isApiLoading };
};

export default useAxiosInterceotor;

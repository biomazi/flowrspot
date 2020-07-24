import { useEffect, useState } from 'react';
import axios from '../axios'

const useAxios = (url, options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      const request = async () => {
        const { data } = await axios.get(url, options);
        setData(data);
      };
      request();
    }
  }, [url])

  const get = async ({ url, config }) => {
    const resp = await axios.get(url, config);
    return resp;
  };

  const post = async ({ url, data, config }) => {
    const resp = await axios.post(url, data, config);
    return resp;
  }

  return { data, get, post };
}

export default useAxios;

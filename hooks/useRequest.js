import { useState } from "react";

const useRequest = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const doRequest = async ({url, method, headers, body, onSuccess}) => {
    try {
      setError(null);
      setStatus('pending');
      const res = await fetch(url, {method, headers, body: JSON.stringify(body)});
      const data = await res.json();

      if (data && data.error) {
        setStatus('error');
        setError(data.error);
        setTimeout(() => {
          setStatus('');
        },2000);
      } else {
        setStatus('success');
        if(onSuccess) onSuccess(data);
      }
      return data;

    } catch (err) {
      console.log(err)
    }
  }

  return [doRequest, error, status];
};

export default useRequest;
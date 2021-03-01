import { useState, useEffect } from 'react';

const useLogged = () => {

  const [isLogged, setLogged] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token !== null) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, []);

  return isLogged;
}

export default useLogged
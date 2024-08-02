/**
 *
 * @param {string} url
 * @param {FetchEventInit} options
 */

import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const headers = {
      Accept: "application/json; charset=UTF-8",
      ...options.headers,
    };
    fetch(url, {
      ...options,
      headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: T) => {
        setData(data);
        setErrors(null);
      })
      .catch((error) => {
        setErrors(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    loading,
    data,
    errors,
  };
}

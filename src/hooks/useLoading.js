import { useState, useEffect } from "react";

export default function useLoading() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitializing(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return initializing;
}

import { useEffect, useState } from "react";

const useNumber = () => {
  const [number, setNumber] = useState(0);
  useEffect(()=> {
    fetch("")
    .then(res => res.json())
    .then(data => setNumber(data.number));
  }, [])
  return number;
  
};

export default useNumber;

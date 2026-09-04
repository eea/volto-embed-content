import { useRef } from 'react';

function useMakeClassInstance(Class, props) {
  const refObject = useRef(null);
  if (refObject.current === null) {
    refObject.current = new Class(...props);
  }
  return refObject.current || new Class(...props);
}

export default useMakeClassInstance;

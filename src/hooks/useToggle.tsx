/**
 * @Param {boolean} inital
 */

import { useState } from "react";

export const useToggle = function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);
  return [state, toggle];
};

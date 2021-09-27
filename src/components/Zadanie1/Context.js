import { createContext } from "react";

export const contentContext = createContext({});
export const userContext = createContext({
  email: "jan@kowalski.pl",
  isAdmin: false,
})
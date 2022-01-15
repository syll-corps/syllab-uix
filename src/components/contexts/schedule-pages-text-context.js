import { createContext } from "react";

const SchedulePagesTextContext = createContext(null);

const { Provider: SchedulePagesTextProvider } = SchedulePagesTextContext;


export {
  SchedulePagesTextContext,
  SchedulePagesTextProvider
}

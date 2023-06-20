// import { useState, useContext, createContext } from "react";

// type SharedSportContextType = {
//   sharedSport: string;
//   setSharedSport: React.Dispatch<React.SetStateAction<string>>;
// };

// const initialState: SharedSportContextType = {
//   sharedSport: "",
//   setSharedSport: () => {},
// };

// export const SharedSportContext = createContext<
//   SharedSportContextType | undefined
// >(initialState);

// export const useSharedSport = () => {
//   const context = useContext(SharedSportContext);
//   if (!context) {
//     throw new Error("UseSharedSport must be used within a SharedSportProvider");
//   }
//   return context;
// };

// export const SharedSportProvider = ({ children }: any) => {
//   const [sharedSport, setSharedSport] = useState<string>("");

//   return (
//     <SharedSportContext.Provider value={{ sharedSport, setSharedSport }}>
//       {children}
//     </SharedSportContext.Provider>
//   );
// };

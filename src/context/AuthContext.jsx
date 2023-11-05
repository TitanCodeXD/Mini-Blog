import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children, value}) {
    return <AuthContext.Provide value = {value}>{children}</AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext);
}
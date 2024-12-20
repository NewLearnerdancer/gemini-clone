import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSent = async (prompt) => {
        try {
            setLoading(true);
            const response = await run(prompt);
            setResult(response);
        } catch (error) {
            console.error("Error:", error);
            setResult("Sorry, there was an error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Context.Provider value={{ onSent, result, loading }}>
            {children}
        </Context.Provider>
    )
}
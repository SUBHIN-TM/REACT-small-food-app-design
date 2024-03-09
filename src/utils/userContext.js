import { createContext } from "react";

const userContext = createContext({
    loggedInUser:"Logined As Guest ",
});

export default userContext;
import React, { createContext } from "react";

// 01....First create a context( Name will be capitalCase)
// const MyContext=React.createContext() // way-1
const MyContext = createContext(); // way-2

// 02.... Wrap the components with context.Provider
const ContextWrapper = ({ children }) => {
    return (
        <MyContext.Provider value="whatever you want">
            {children}
        </MyContext.Provider>
    );
};

// 03.... Finally export the component
export default ContextWrapper;

// 04... we also need to export MyContext
export { MyContext };
// or simply
// export const MyContext = createContext(); // way-2

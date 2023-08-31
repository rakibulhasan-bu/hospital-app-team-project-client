import { ReactNode, createContext, useState } from "react";

interface ContextInfoProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    close: boolean;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext<ContextInfoProps>({
    open: false,
    setOpen: () => { },
    close: true,
    setClose: () => { },
});

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [close, setClose] = useState<boolean>(true);
    const contextInfo: ContextInfoProps = {
        open,
        setOpen, close, setClose
    }
    return (
        <DashboardContext.Provider value={contextInfo}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;
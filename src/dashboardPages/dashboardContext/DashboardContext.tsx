import { ReactNode, createContext, useState } from "react";

interface ContextInfoProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    close: boolean;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
    newsOpen: boolean;
    handleNews: (event: React.MouseEvent<HTMLElement>) => void;
    appointmentOpen: boolean;
    handleAppointment: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

export const DashboardContext = createContext<ContextInfoProps>({
    open: false,
    setOpen: () => { },
    close: true,
    setClose: () => { },
    newsOpen: false,
    handleNews: () => { },
    appointmentOpen: false,
    handleAppointment: () => { },
    handleClose: () => { },
});

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [close, setClose] = useState<boolean>(true);
    const [newsOpen, setNewsOpen] = useState<boolean>(false);
    const [appointmentOpen, setAppointmentOpen] = useState<boolean>(false);


    const handleNews = () => {
        setNewsOpen(prev => (!prev))
    }
    const handleAppointment = () => {
        setAppointmentOpen((prev) => !prev);
    };
    const handleClose = () => {
        setClose(false);
        setNewsOpen(false);
        setAppointmentOpen(false);
    };

    const contextInfo: ContextInfoProps = {
        open,
        setOpen,
        close,
        setClose,
        handleNews,
        newsOpen,
        appointmentOpen,
        handleAppointment,
        handleClose
    }
    return (
        <DashboardContext.Provider value={contextInfo}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;
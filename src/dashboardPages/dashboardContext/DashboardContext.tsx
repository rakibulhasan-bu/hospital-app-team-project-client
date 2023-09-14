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
    doctorOpen: boolean;
    handleDoctor: (event: React.MouseEvent<HTMLElement>) => void;
    branchOpen: boolean;
    handleBranch: (event: React.MouseEvent<HTMLElement>) => void;
    pharmacyOpen: boolean;
    handlePharmacy: (event: React.MouseEvent<HTMLElement>) => void;
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
    doctorOpen: false,
    handleDoctor: () => { },
    branchOpen: false,
    handleBranch: () => { },
    pharmacyOpen: false,
    handlePharmacy: () => { },
    handleClose: () => { },
});

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [close, setClose] = useState<boolean>(true);
    const [newsOpen, setNewsOpen] = useState<boolean>(false);
    const [doctorOpen, setDoctorOpen] = useState<boolean>(false);
    const [branchOpen, setBranchOpen] = useState<boolean>(false);
    const [pharmacyOpen, setPharmacyOpen] = useState<boolean>(false);
    const [appointmentOpen, setAppointmentOpen] = useState<boolean>(false);


    const handleNews = () => {
        setNewsOpen(prev => (!prev));
        setAppointmentOpen(false);
        setDoctorOpen(false);
        setBranchOpen(false);
        setPharmacyOpen(false)
    }
    const handleAppointment = () => {
        setAppointmentOpen((prev) => !prev);
        setNewsOpen(false);
        setDoctorOpen(false);
        setBranchOpen(false);
        setPharmacyOpen(false)
    };
    const handleDoctor = () => {
        setDoctorOpen((prev) => !prev);
        setNewsOpen(false);
        setAppointmentOpen(false);
        setBranchOpen(false);
        setPharmacyOpen(false)
    };
    const handleBranch = () => {
        setBranchOpen((prev) => !prev);
        setNewsOpen(false);
        setAppointmentOpen(false);
        setDoctorOpen(false);
        setPharmacyOpen(false)
    };
    const handlePharmacy = () => {
        setPharmacyOpen((prev) => !prev);
        setNewsOpen(false);
        setAppointmentOpen(false);
        setDoctorOpen(false);
        setBranchOpen(false)
    };
    const handleClose = () => {
        setClose(false);
        setNewsOpen(false);
        setAppointmentOpen(false);
        setDoctorOpen(false);
        setBranchOpen(false);
        setPharmacyOpen(false)
    };

    const contextInfo: ContextInfoProps = {
        open,
        setOpen,
        close,
        setClose,
        handleNews,
        doctorOpen,
        handleDoctor,
        branchOpen,
        handleBranch,
        pharmacyOpen,
        handlePharmacy,
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
import { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            
            ></AppointmentBanner>
            
            {/* <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment> */}
        </div>
    );
};

export default Appointment;
import { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import { format } from 'date-fns';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            
            ></AppointmentBanner>
            <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate,'PP')}</p> 
            {/* <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment> */}
        </div>
    );
};

export default Appointment;
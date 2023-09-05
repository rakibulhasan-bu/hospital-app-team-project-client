import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
interface AppointmentBannerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void; 
}

const AppointmentBanner: React.FC<AppointmentBannerProps> = ({ selectedDate, setSelectedDate }) => {
  

  return (
    <header className='my-6' style={{ backgroundImage: `url(https://i.ibb.co/BsfJ7qD/bg.png)`, backgroundSize: 'cover' }}>
      <div className="hero">
        <div className="grid grid-cols-2 items-center justify-items-center gap-4">
          
          <div className='text-blue-600'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect = {setSelectedDate} 
              
            />
          </div>
          <img src='https://i.ibb.co/bsgw4Y9/chair.png' className=" rounded-lg shadow-2xl" alt='' />
        </div>
        
      </div>
    </header>
  );
};

export default AppointmentBanner;

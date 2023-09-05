import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
interface AppointmentBannerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void; 
}

const AppointmentBanner: React.FC<AppointmentBannerProps> = ({ selectedDate, setSelectedDate }) => {
  

  return (
    <div>
    <header className='my-6' style={{ backgroundImage: `url(https://i.ibb.co/BsfJ7qD/bg.png)`, backgroundSize: 'cover' }}>
      <section>
      <div className="">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-4">
          
          <div className='text-blue-600'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect = {setSelectedDate} 
              
            />
          </div>
          <img src='https://i.ibb.co/bsgw4Y9/chair.png' className=" rounded-lg lg:block hidden shadow-2xl" alt='' />
        </div>
        <p className='text-center text-xl my-8 text-secondary font-semibold'>Available Appointments on: <span className='font-bold'>{format(selectedDate,'PP')}</span></p> 
      </div>
      </section>
      </header>
      <section className='grid grid-cols-2 gap-6 container px-2 mx-auto justify-around'>
      {/* patient */}
        <div> 
          <div>
            <img className='w-40 rounded-2xl' src="https://i.ibb.co/Mn5mhwG/patient.png" alt="Patient img" />
          </div>
          <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Patient Name:</p>
            <p>Mr. Rahman </p>
          </div>
          <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Patient Email:</p>
            <p>rahman@gmail.com </p>
          </div>
        </div>
        {/* Doctor */}
        <div className=''>
          <div>
            <img className='w-28  mb-4 rounded-2xl' src="https://i.ibb.co/3TzjbHY/images.jpg" alt="Doctor img" />
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Name:</p>
            <p>Mr. Rahman </p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Email:</p>
            <p>rahman@gmail.com  </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default AppointmentBanner;

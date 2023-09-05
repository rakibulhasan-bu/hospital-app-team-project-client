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
          <div className='bg-sky-100 py-5 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-full min-w-[200px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-slate-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Your Age
    </label>
          </div>
          </div>
          <div className='bg-sky-100 py-5 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-full min-w-[200px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-slate-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Your Address
    </label>
          </div>
          </div>
          <div className='bg-sky-100 py-4 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-full min-w-[200px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-slate-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Brief description of your disease
    </label>
          </div>
          </div>
        </div>
        {/* Doctor */}
        <div className=''>
          <div>
            <img className='w-36  mb-4 rounded-2xl' src="https://i.ibb.co/VxHCh95/doctor-img.png" alt="Doctor img" />
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Name:</p>
            <p>Dr. Jonathan Behar </p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor qualification:</p>
            <p>MBBS, FCPS</p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Email:</p>
            <p>jonathan@gmail.com  </p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Email:</p>
            <p>jonathan@gmail.com  </p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor Email:</p>
            <p>jonathan@gmail.com  </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default AppointmentBanner;

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
            
            <p className='text-center text-xl my-8 text-secondary font-semibold'>Available Appointments on: <span className='font-bold'>{format(selectedDate,'PP')}</span></p> 
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
            <p className='font-bold'>Qualification:</p>
            <p>MBBS, FCPS</p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Specialty:</p>
            <p>Cardiologist  </p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Chamber address:</p>
            <p>123 Hospital Street, Dhaka, Bangladesh</p>
          </div>
        <div className='bg-sky-100 p-3 mb-6 text-xl rounded-lg'>
            <p className='font-bold'>Doctor's fee:</p>
            <p>$ 150  </p>
          </div>

        </div>

      </section>
      <section className='px-14 pb-10'>
        <div className='border-solid border-2 border-indigo-600 rounded-lg p-3'>
          <h3 className='text-center text-xl text-secondary font-bold mb-5'>Appointment Information</h3>
          <div className='grid lg:grid-cols-3 gap-4'>

          <div className='bg-sky-100 p-3  text-xl rounded-lg'>
            <p className='font-bold'>Appointment type:</p>
            <div>
            <input className='mb-2' type="radio" value="Online" name="type" /> Online Consultation <br />
            <input type="radio" value="offline" name="type" /> Chamber Appointment
            
      </div>
          </div>

          <div className='bg-sky-100 p-3  text-xl rounded-lg'>
          <p className=' font-semibold mb-2'>Appointment Time: </p>
          <div className="inline-block relative w-full">
            
  <select className="block appearance-none w-full bg-sky-50 border border-blue-400 hover:border-blue-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>10.00 - 11.00</option>
    <option>11.00 - 12.00</option>
    <option>12.00 - 1.00</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
          </div>

          <div className='bg-sky-100 p-3  text-xl rounded-lg'>
          <p className=' font-semibold mb-2'>Patient phone number:</p>
          <div className="  relative h-11 w-full min-w-[200px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-slate-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Your phone number
    </label>
          </div>
          </div>

          </div>
        </div>
        
      </section>
        </div>
    );
};

export default Appointment;
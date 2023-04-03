import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AddAppointmentsInfo";


function App() {

  let[appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(()=>{
    fetchData(`/public/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, [])

  useEffect(()=>{
    fetchData()
  }, [fetchData])



  return (
    <div className="App container mx-auto nt-3 font-light">
      <h1 className="text-2.8xl mb-6">
        <BiCalendar className="inline-block text-red-400 align-top" /> Your
        Appointments
        <AddAppointments />
        <Search />
        <ul className="divide-y divide-gray-200">
          {appointmentList.map((appointment) => (
            <AppointmentInfo key = {appointment.id}
             appointment={appointment}
             onDeleteAppointment={
              appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id === appointmentId))
             }
            />
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
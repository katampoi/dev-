import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AddAppointmentsInfo";
import appointmentList from "./components/data.json";

function App() {
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
            />
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
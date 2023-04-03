import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AddAppointmentsInfo";


function App() {

  let[appointmentList, setAppointmentList] = useState([]);
  let[query, setQuery] = useState("");
  let[sortBy, setSortby] = useState("petName");
  let[orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
    ? -1 * order : 1 * order
  })

  const fetchData = useCallback(()=>{
    fetchData(`./data.json`)
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
        <Search query={query} 
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortbyChange={mySort => setSortby(mySort)}
        />
        <ul className="divide-y divide-gray-200">
          {filteredAppointments.map((appointment) => (
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
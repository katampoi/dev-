import { BiCalendar, BiTrash } from "react-icons/bi"
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import appointmentList from "./data.json"

function App() {
  return (
    <div className="App container mx-auto nt-3 font-thin">
      <h1 className="text-5xl mb-6">
        <BiCalendar className="inline-block text-red-400 align-top" /> Your
        Appointments
        <AddAppointments />
        <Search />
        <ul className="divide-y divide-gray-200">
          {appointmentList.map(appointment => (
            <li className="px-3 py-3 flex items-start">
              <button
                type="button"
                className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <BiTrash />
              </button>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="flex-none font-medium text-2xl text-blue-500">
                    petName
                  </span>
                  <span className="flex-grow text-right">aptDate</span>
                </div>
                <div>
                  <b className="font-bold text-blue-500">Owner:</b> ownerName
                </div>
                <div className="leading-tight">aptNotes</div>
              </div>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
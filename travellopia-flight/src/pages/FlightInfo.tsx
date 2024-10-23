import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatDepartureTime } from "../utils/timeFormatter";
import { FlightInfo } from "../redux/reducer";

const FlightInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<FlightInfo | null>(null);

  useEffect(() => {
    const fetchFlight = async () => {
      const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
      setFlight(response.data);
    };
    fetchFlight();
  }, [id]);

  if (!flight) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-white">
      <div className="text-xl font-bold text-white animate-pulse">Loading flight information...</div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-50">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white mb-4">
          {flight.airline}
        </h2>
        <div className="space-y-4">
          <p className="text-xl text-gray-800"><span className="font-bold">Flight Number:</span> {flight.flightNumber}</p>
          <p className="text-xl text-gray-800"><span className="font-bold">Origin:</span> {flight.origin}</p>
          <p className="text-xl text-gray-800"><span className="font-bold">Destination:</span> {flight.destination}</p>
          <p className="text-xl text-gray-800"><span className="font-bold">Departure Time:</span> {formatDepartureTime(flight.departureTime)}</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full mt-8 py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out"
        >
          Back to Flights
        </button>
      </div>
    </div>
  );
};

export default FlightInfoPage;
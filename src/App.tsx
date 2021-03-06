import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import SingleCustomer from "./components/SingleCustomer";
import SingleReservation from "./components/SingleReservation";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [newReserv, setNewReserv] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddingReserv = () => {
    if (!newReserv) return false;
    dispatch(addReservation(newReserv));
    setNewReserv("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations?.map((name, index) => {
                return (
                  <SingleReservation key={index} index={index} name={name} />
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={newReserv}
              onChange={(e) => setNewReserv(e.target.value)}
            />
            <button onClick={handleAddingReserv}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers?.map((customer,index) => {
            return (
              <SingleCustomer
                key={customer.id}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  const NameInput = useRef(null);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const AddCustomer = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CUSTOMER", newItem: NameInput.current.value });
    NameInput.current.value = null;
  };

  const RemoveCustomer = (index) => {
    if (typeof NameInput.current.value !== null) {
      dispatch({
        type: "REMOVE_CUSTOMER",
        payload: {
          index: index,
        },
      });
      NameInput.current.value = null;
    } else {
      alert("Нет");
    }
  };

  const clear = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_ALL_CUSTOMERS",
      newItem: NameInput.current.value,
    });
    NameInput.current.value = null;
  };
  return (
    <div className="App">
      <div>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Прибавить</button>
        <button onClick={() => getCash(Number(prompt()))}>Убавить</button>
      </div>
      <form>
        <input
          className="string"
          type="text"
          ref={NameInput}
          placeholder="Name"
          name="Name"
        />{" "}
        <br />
        <button onClick={AddCustomer}>Отправить</button>
        <button onClick={clear}>Очистить</button>
      </form>
      <div>
        {customer.length > 0 ? (
          <div>
            {customer.map((customer, index) => (
              <div>
                {index + 1} {customer}
                <button onClick={() => RemoveCustomer(index - 1)}>
                  Убрать пользователя
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Нет</div>
        )}
      </div>
    </div>
  );
}

export default App;

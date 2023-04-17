import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0) {
      setIsValid(true);
      return;
    }
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    if (nameValue.trim().length > 0) {
      setIsValid(false);
    }
    setCustomerName(nameValue);
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
        onChange={nameInputChangeHandler}
        value={customerName}
        style={{
          backgroundColor: isValid ? "red" : "",
        }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;

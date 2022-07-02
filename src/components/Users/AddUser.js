import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    props.onAddUser(userName, age);

    setUserName("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value.toUpperCase());
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title="An error occured!"
          message="Something went wrong"
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            onChange={usernameChangeHandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            onChange={ageChangeHandler}
            id="age"
            type="number"
            min={1}
            max={100}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

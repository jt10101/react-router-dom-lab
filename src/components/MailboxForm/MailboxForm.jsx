import { useState } from "react";

const MailboxForm = (props) => {
  const [createBoxName, setBoxName] = useState();
  const [createBoxSize, setBoxSize] = useState();

  const handleNameChange = (event) => {
    setBoxName(event.target.value);
  };
  const handleSizeChange = (event) => {
    setBoxSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox({
      boxSize: createBoxSize,
      boxOwner: createBoxName,
    });
  };
  return (
    <>
      <h1>New Mailbox</h1>
      <h4>Enter a Boxholder:</h4>
      <input
        type="text"
        name="boxOwner"
        placeholder="Boxholder Name"
        onChange={handleNameChange}
      ></input>
      <h4>Select a Boxsize:</h4>
      <input
        type="text"
        name="boxSize"
        onChange={handleSizeChange}
        placeholder="Placeholder for Selection"
      ></input>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export { MailboxForm };

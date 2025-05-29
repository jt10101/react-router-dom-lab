import { useState } from "react";

const LetterForm = (props) => {
  const [receipientID, setReceipientID] = useState("1");
  const [receipientName, setReceipientName] = useState("1");
  const [message, setMessage] = useState();
  let boxes = props.mailboxes;

  const handleReceipientID = (event) => {
    setReceipientID(event.target.value);
    // console.log(event.target.value);
  };

  const handleReceipientName = (event) => {
    setReceipientName(event.target.value);
    // console.log(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();

    let messagedetails = {
      _id: Number(receipientID),
      receipientName: receipientName,
      lettermessage: message,
    };
    props.sendMessage(messagedetails);
  };

  return (
    <>
      <h1>New Letter</h1>
      <h4>Select a mailbox:</h4>
      <select onChange={handleReceipientID}>
        {boxes.map((mailbox) => (
          <option value={mailbox._id}>{mailbox._id}</option>
        ))}
      </select>
      <h4>Recipient</h4>
      <input
        type="text"
        name="recipientname"
        placeholder="Recipient Name"
        onChange={handleReceipientName}
      ></input>
      <h4>Message</h4>
      <textarea placeholder="Message" onChange={handleMessage}></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export { LetterForm };

{
  /*         <option value="Small">Small</option>
   */
}

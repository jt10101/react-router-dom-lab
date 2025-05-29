const MailboxForm = (props) => {
  return (
    <>
      <h1>New Mailbox</h1>
      <h4>Enter a Boxholder:</h4>
      <input
        type="text"
        placeholder="Boxholder Name"
        onChange={props.handlechange}
      ></input>
      <h4>Select a Boxsize:</h4>
      <input type="text" placeholder="Placeholder for Selection"></input>
      <br />
      <button>Submit</button>
    </>
  );
};

export { MailboxForm };

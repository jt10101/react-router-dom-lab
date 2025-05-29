const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <nav>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox.boxOwner}>{mailbox.boxOwner}</li>
        ))}
      </nav>
    </>
  );
};

export { MailboxList };

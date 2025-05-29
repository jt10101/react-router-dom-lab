import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxID } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxID)
  );
  return (
    <>
      <div className="mailbox">
        <h1>Mailbox {selectedBox._id} </h1>
        <h3>Details</h3>
        <p>Boxholder: {selectedBox.boxOwner}</p>
        <p>Box size: {selectedBox.boxSize}</p>
      </div>
    </>
  );
};

export { MailboxDetails };

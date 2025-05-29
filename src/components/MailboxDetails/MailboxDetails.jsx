import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxID } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxID)
  );

  const selectedBoxMail = props.letters.find(
    (letters) => letters._id === Number(mailboxID)
  );
  console.log(selectedBoxMail);
  return (
    <>
      <div className="mailbox">
        <h1>Mailbox {selectedBox._id} </h1>
        <h3>Details</h3>
        <p>Boxholder: {selectedBox.boxOwner}</p>
        <p>Box size: {selectedBox.boxSize}</p>
      </div>
      <div>
        <h3>Letters</h3>
        {selectedBoxMail?.map((x) => (
          <p>Hello</p>
        ))}
      </div>
    </>
  );
};

export { MailboxDetails };

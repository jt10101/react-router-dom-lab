import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxID } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxID)
  );
  // console.log(selectedBox);

  const selectedLetters = props.letters.filter(
    (letter) => letter._id === Number(mailboxID)
  );
  console.log(selectedLetters);

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
        <hr style={{ border: "0.5px solid black" }} />{" "}
        {selectedLetters.map((x) => (
          <>
            <h4>Dear {x.receipientName}</h4>
            <p>{x.lettermessage}</p>
            <hr style={{ border: "0.5px solid black" }} />
          </>
        ))}
      </div>
    </>
  );
};

export { MailboxDetails };

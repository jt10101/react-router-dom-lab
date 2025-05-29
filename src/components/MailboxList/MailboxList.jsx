import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <nav>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox.boxOwner}>
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxOwner}</Link>
          </li>
        ))}
      </nav>
    </>
  );
};

export { MailboxList };

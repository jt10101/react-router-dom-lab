// src/App.jsx
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes, useNavigate } from "react-router";
import { MailboxDetails } from "./components/MailboxDetails/MailboxDetails";
import { MailboxForm } from "./components/MailboxForm/MailboxForm";
import { MailboxList } from "./components/MailboxList/MailboxList";
import { useState } from "react";
import "./index.css";

const mailboxsample = [
  // { _id: 1, boxSize: "Small", boxOwner: "Alex" },
  // { _id: 2, boxSize: "Small", boxOwner: "Jacob" },
  // { _id: 3, boxSize: "Small", boxOwner: "John" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxsample);

  const addBox = (input) => {
    let newID = mailboxes.length + 1;
    input._id = newID;
    let newMailbox = [...mailboxes, input];
    setMailboxes(newMailbox);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxID"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;

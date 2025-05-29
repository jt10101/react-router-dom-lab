// src/App.jsx
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import { MailboxDetails } from "./components/MailboxDetails/MailboxDetails";
import { MailboxForm } from "./components/MailboxForm/MailboxForm";
import { MailboxList } from "./components/MailboxList/MailboxList";
import { useState } from "react";

const mailboxsample = [
  { _id: 1, boxSize: "Small", boxOwner: "Alex" },
  { _id: 2, boxSize: "Small", boxOwner: "Jacob" },
  { _id: 3, boxSize: "Small", boxOwner: "John" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxsample);

  const addBox = (data) => {
    let newMailbox = {};
    newMailbox = { ...newMailbox, data };
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
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxID" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contact = [
    {
      id: "1",
      name: "Daniel",
      email: "dsi@gmail.com",
    },
    {
      id: "2",
      name: "Syles",
      email: "syles@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;

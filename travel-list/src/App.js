function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>Far Away</h1>
    </div>
  );
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <h2>Packing List</h2>
      <ul>
        <li>Passport</li>
        <li>Phone</li>
        <li>Charger</li>
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <div>
      <h2>Stats</h2>
      <ul>
        <li>Items packed: 3</li>
      </ul>
    </div>
  );
}

export default App;

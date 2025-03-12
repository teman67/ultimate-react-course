export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button>Next</button>
      </div>
    </div>
  );
}

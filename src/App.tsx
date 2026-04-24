import './App.css'
import Stars from "./components/Stars";

function App() {

  const count = 5;

  return (
    <div className="container">
      <Stars count={count} />
    </div>
  )
}

export default App

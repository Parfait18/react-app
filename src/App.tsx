import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { loading, data, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20&_delay=5000"
  );
  return (
    <div className="p-4">
      {loading && <div> Chargement ...</div>}
      {/* {data && d} */}
    </div>
  );
}

export default App;

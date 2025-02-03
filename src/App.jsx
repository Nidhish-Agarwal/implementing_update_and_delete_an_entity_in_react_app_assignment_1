import { useEffect } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  console.log(API_URI);
  let data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/1`);
        console.log(response.data);
        data = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Get the existing item from the server
  // const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop

  return <UpdateItem item={data} />;
}

export default App;

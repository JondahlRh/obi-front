import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [apidata, setApidata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/");
      setApidata(data);
    };
    fetchData();
  }, []);

  return <h1 className="text-3xl font-bold underline">{apidata}</h1>;
};

export default App;

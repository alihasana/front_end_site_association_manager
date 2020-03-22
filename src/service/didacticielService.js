import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios
                            .get("https://jsonplaceholder.typicode.com/users")
                            .then(result => setData(result.data));
  );}, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.username}>
            {item.username}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
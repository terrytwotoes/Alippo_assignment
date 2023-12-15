import React, { useState, useEffect } from "react";
import Table from "./components/Table";

export interface UserData {
  id: number;
  name: string | null;
  age: number;
  city: string;
  pinCode: string | null;
}

const App: React.FC = () => {
  const [tableData, setTableData] = useState<UserData[]>([]);

  useEffect(() => {
    fetch("https://assets.alippo.com/catalog/static/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataWithIDs = data.map((item: UserData, index: number) => ({
          ...item,
          id: index + 1,
        }));
        setTableData(dataWithIDs);
      })
      .catch((error) => {
        //* If error, maybe have some fallback UI, or simply show empty table
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateTableRow = (updatedItem: UserData) => {
    //* Make Post/Put request to server if successful, run the below code
    const updatedTableData = tableData.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setTableData(updatedTableData);
  };

  const updateTable = (id: number) => {
    //* Make delete request to server if successful, run the below code
    const updatedTableData = tableData.filter((item) => item.id != id);
    setTableData(updatedTableData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">Alippo Assignment</h1>
      <Table
        tableData={tableData}
        updateTableRow={updateTableRow}
        updateTable={updateTable}
      />
    </div>
  );
};

export default App;

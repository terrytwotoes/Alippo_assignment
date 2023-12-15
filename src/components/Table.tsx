import React, { useState } from "react";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

import { UserData } from "../App";

interface TableProps {
  tableData: UserData[];
  updateTableRow: (updatedItem: UserData) => void;
  updateTable: (updatedData: UserData[]) => void;
}

const Table = ({ tableData, updateTableRow, updateTable }: TableProps) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<UserData | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleEdit = (item: UserData) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDelete = (id: number) => {
    setSelectedItemId(id);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="overflow-x-auto mb-8">
        <div className="inline-block min-w-full overflow-hidden sm:rounded-lg border border-gray-200">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 border border-gray-300">SL No.</th>
                <th className="py-2 px-4 border border-gray-300">Name</th>
                <th className="py-2 px-4 border border-gray-300">Age</th>
                <th className="py-2 px-4 border border-gray-300">City</th>
                <th className="py-2 px-4 border border-gray-300">Pincode</th>
                <th className="py-2 px-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tableData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-2 px-4 border border-gray-300">
                    {item.id}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.name || "-"}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.age}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.city}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {item.pinCode || "-"}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && (
        <EditModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          selectedItem={selectedItem}
          updateTableRow={updateTableRow}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          selectedItemId={selectedItemId}
          updateTable={updateTable}
        />
      )}
    </>
  );
};

export default Table;

import React, { useState } from "react";
import { UserData } from "../App";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: UserData | null; // Assuming selectedItem is of type UserData or null
  updateTableRow: (updatedItem: UserData) => void; // Function taking UserData parameter and returning void
}

const EditModal = ({
  isOpen,
  onClose,
  selectedItem,
  updateTableRow,
}: EditModalProps) => {
  const [editedName, setEditedName] = useState(selectedItem?.name || "-");

  const handleSave = () => {
    // Update the selectedItem with the edited name
    const updatedItem = { ...selectedItem, name: editedName };
    console.log("Updated Item:", updatedItem);

    updateTableRow(updatedItem);

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2>Edit Item</h2>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;

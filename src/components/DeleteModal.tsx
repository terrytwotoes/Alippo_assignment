import { UserData } from "../App";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItemId: number | null;
  updateTable: (updatedData: UserData[]) => void;
}

const DeleteModal = ({
  isOpen,
  onClose,
  selectedItemId,

  updateTable,
}: DeleteModalProps) => {
  const confirmDelete = (id: number) => {
    updateTable(id);

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2>Delete SL No. {selectedItemId}</h2>
            <p>Are you sure you want to delete this item?</p>
            <button
              onClick={() => confirmDelete(selectedItemId)}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
            >
              Confirm
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

export default DeleteModal;

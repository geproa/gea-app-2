import { useState, useEffect } from "react";
import {
  updateDoc,
  deleteDoc,
  doc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

import Link from "next/link";

function AdminUsa({ totalDocs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const docsPerPage = 20; // adjust as needed
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsAdmin1, setCheckedItemsAdmin1] = useState({});
  const [checkedItemsAdmin2, setCheckedItemsAdmin2] = useState({});

  useEffect(() => {
    const entriesRef = collection(db, "entries");
    const unsubscribe = onSnapshot(entriesRef, (snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(entries);
      setCheckedItems(
        entries.reduce(
          (acc, item) => ({ ...acc, [item.id]: item.checked || false }),
          {}
        )
      );
      setCheckedItemsAdmin1(
        entries.reduce(
          (acc, item) => ({ ...acc, [item.id]: item.checkedAdmin1 || false }),
          {}
        )
      );
      setCheckedItemsAdmin2(
        entries.reduce(
          (acc, item) => ({ ...acc, [item.id]: item.checkedAdmin2 || false }),
          {}
        )
      );
    });
    return unsubscribe;
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckboxChange = async (event, id) => {
    const isChecked = event.target.checked;
    setCheckedItems((prevState) => ({ ...prevState, [id]: isChecked }));

    try {
      const entryRef = doc(db, "entries", id);
      await updateDoc(entryRef, {
        checked: isChecked,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChangeAdmin1 = async (event, id) => {
    const isChecked = event.target.checked;
    setCheckedItemsAdmin1((prevState) => ({ ...prevState, [id]: isChecked }));

    try {
      const entryRef = doc(db, "entries", id);
      await updateDoc(entryRef, {
        checkedAdmin1: isChecked,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChangeAdmin2 = async (event, id) => {
    const isChecked = event.target.checked;
    setCheckedItemsAdmin2((prevState) => ({ ...prevState, [id]: isChecked }));

    try {
      const entryRef = doc(db, "entries", id);
      await updateDoc(entryRef, {
        checkedAdmin2: isChecked,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        const entryRef = doc(db, "entries", id);
        await deleteDoc(entryRef);
        setData(data.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  const currentDocs = data.slice(indexOfFirstDoc, indexOfLastDoc);

  const totalPages = Math.ceil(totalDocs / docsPerPage);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-xl mb-5">Applications:</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border border-blue-500 border-opacity-100 p-2">
              Status
            </th>
            <th className="border border-blue-500 border-opacity-100 p-2">
              Admin 1
            </th>
            <th className="border border-blue-500 border-opacity-100 p-2">
              Admin 2
            </th>
            <th className="border border-blue-500 border-opacity-100 p-2">
              Name
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentDocs.map((item) => (
            <tr key={item.id}>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <input
                   className="mx-5 w-6 h-6"
                  type="checkbox"
                  checked={checkedItems[item.id]}
                  onChange={(event) => handleCheckboxChange(event, item.id)}
                />
              </td>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <input
                  name="Admin1"
                  className="mx-5 w-6 h-6"
                  type="checkbox"
                  checked={checkedItemsAdmin1[item.id]}
                  onChange={(event) =>
                    handleCheckboxChangeAdmin1(event, item.id)
                  }
                />
              </td>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <input
                  name="Admin2"
                  className="mx-5 w-6 h-6"
                  type="checkbox"
                  checked={checkedItemsAdmin2[item.id]}
                  onChange={(event) =>
                    handleCheckboxChangeAdmin2(event, item.id)
                  }
                />
              </td>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <b>{item.firstName} {item.lastName}</b> | date: {item.todayDate}
              </td>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <Link href={`/usa/${item.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                    Details
                  </button>
                </Link>
              </td>
              <td className="border border-blue-500 border-opacity-100 p-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="flex items-center mt-5">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          class="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Prev
        </button>
        <span className="m-5">Page {currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          class="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminUsa;

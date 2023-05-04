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
  const [checkedItems, setCheckedItems] = useState(
    data.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.checked || false }),
      {}
    )
  );

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
    <div>
      <h1>Applications for USA program:</h1>
      <ul>
        {currentDocs.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={checkedItems[item.id]}
              onChange={(event) => handleCheckboxChange(event, item.id)}
            />
            {item.firstName}
            <Link href={`/usa/${item.id}`}>
              <button>Details</button>
            </Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <span>Page {currentPage} </span>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminUsa;

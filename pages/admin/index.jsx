import withAuth from "../../lib/withAuth";
import { auth } from "../../lib/firebase";
import AdminUsa from "@/components/adminUsa/AdminUsa";

import { db } from "../../lib/firebase";
import { getDocs, collection } from "firebase/firestore";

export async function getServerSideProps({ query }) {
  const myCollection = collection(db, "entries");

  // get the total number of documents
  const totalDocsSnapshot = await getDocs(myCollection);
  const totalDocs = totalDocsSnapshot.size;

  // calculate the current page based on the query parameter, default to 1
  const currentPage = query.page ? parseInt(query.page, 10) : 1;

  // calculate the start and end index of the documents to retrieve based on the current page
  const docsPerPage = 2; // adjust as needed
  const startIndex = (currentPage - 1) * docsPerPage;
  const endIndex = startIndex + docsPerPage;

  // retrieve the documents for the current page
  const querySnapshot = await getDocs(myCollection);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return {
    props: { data, totalDocs },
  };
}

function Admin({ data }) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="max-w-7xl mx-auto mt-5 flex justify-between">
        <h1 className="text-blue-500 text-xl font-bold">Administration Page</h1>
        <div onClick={handleLogout}>
          <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded">Log Out</button>
        </div>
      </div>
      <div>
        <AdminUsa data={data} />
      </div>
    </>
  );
}

export default withAuth(Admin);

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

function UsaItem() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getItem() {
      const entryRef = doc(db, 'entries', id);
      const entryDoc = await getDoc(entryRef);
      if (entryDoc.exists()) {
        setItem({ id: entryDoc.id, ...entryDoc.data() });
      } else {
        setItem(null);
      }
    }
    getItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.surname}</p>
      <p>{item.city}</p>
      <p>{item.email}</p>
    </div>
  );
}

export default UsaItem;

import { db } from "../service/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export const addPresentation = async (data) => {
  try {
    await addDoc(collection(db, "presentations"), {
      ...data,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });
    // onClose()
  } catch (err) {
    alert(err);
  }
};

export const getPresentations = () => {
  const q = query(collection(db, "presentations"), orderBy("created", "desc"));
  let data;
  onSnapshot(q, (querySnapshot) => {
    data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  });
  console.log(data);

  return data;
};

import { db } from "../service/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  getDocs,
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

export const getPresentations = async () => {
  // const q = query(collection(db, "presentations"), orderBy("created", "desc"));
  // let data;
  // onSnapshot(q, (querySnapshot) => {
  //   data = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     data: doc.data(),
  //   }));
  // });

  const col = collection(db, "presentations");
  const snapshot = await getDocs(col);
  const presentationList = snapshot.docs.map((doc) => doc.data());

  // snapshot => {
  //   // let fetchData= [];
  //   // fetchData.push(snapshot.val());
  //   // setData({fetchData});
  //   // });
  return presentationList;
};

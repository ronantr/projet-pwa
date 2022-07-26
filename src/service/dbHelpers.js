import { db } from "../service/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  where,
  getDocs,
  doc,
  getDoc,
  FieldPath,
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
export const addSlide = async (data) => {
  try {
    await addDoc(collection(db, "slides"), {
      ...data,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });
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
export const getPresentation = async (title) => {
  const docRef = collection(db, "presentations");
  const docq = query(docRef, where("title", "==", title));
  const querySnapshot = await getDocs(docq);
  const presentation = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const ids = doc.id;
    presentation.push({ ...doc.data(), id: doc.id });
    //if (presentation === undefined) { return null; } return presentation;
    //console.log({ids,...docq.data()});
    //return presentation;
  });
  return presentation;
};
export const updatePresentation = async (data) => {
  try {
    await addDoc(collection(db, "presentations"), {
      ...data,
      updated: Timestamp.now(),
    });
    // onClose()
  } catch (err) {
    alert(err);
  }
};

export const deletePresentation = async (id) => {
  try {
    await doc(collection(db, "presentations"), id).delete();
    // onClose()
  } catch (err) {
    alert(err);
  }
};

// firebase get slides collection inside presentation document

// export const getSlideById = async (presentationId, slideId) => {
//   /************************** */

//   const docRef = collection(db, "presentations", presentationId, "slides");
//   const querySnapshot = await getDocs(docRef);
//   querySnapshot.forEach((doc) => {
//     //console.log(docq.id, " => ", docq.data());
//     const ids = doc.id;
//     const presentation = { ...doc.data(), id: doc.id };
//     //if (presentation === undefined) { return null; } return presentation;
//     console.log(presentation);
//     return presentation;
//   });
//   // console.log(await doc(db, "presentations", presentationId));

//   /************************** */
//   /*
//   const docRef = doc(db, "presentations", presentationId);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.collection("slides"), docSnap.id);
// */

//   /************************ */
// };

export const getAllSlides = async (presentationId) => {
  const docRef = collection(db, "presentations", presentationId, "slides");
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const slides = { ...doc.data(), id: doc.id };
    if (slides === undefined) {
      return null;
    }
    return slides;
  });
};

export const getSlide = async (presentationId, slideId) => {
  const docRef = collection(
    db,
    "presentations",
    presentationId,
    "slides",
    slideId
  );
  const docSnap = await getDoc(docRef);
  const slide = { ...docSnap.data(), id: docSnap.id };
  if (slide === undefined) {
    return null;
  }
  return slide;
};

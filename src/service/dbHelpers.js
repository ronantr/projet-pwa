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
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const addPresentation = async (data) => {
  try {
    const idPresentation = await addDoc(collection(db, "presentations"), {
      ...data,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });
    console.log(idPresentation.id);
    await addDoc(collection(db, "presentations", idPresentation.id, "slides"), {
      content: "",
      background: "",
      author: data.author.email,
      editor: data.author.email,
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
    const da = await addDoc(
      collection(db, "presentations", data.idPresentation, "slides"),
      {
        content: "",
        background: "",
        editor: data.editor,
        created: Timestamp.now(),
        updated: Timestamp.now(),
      }
    );
    console.log(da.id);
  } catch (err) {
    alert(err);
  }
};

export const deleteSlide = async (presentationId, slideId) => {
  try {
    const docRef = doc(db, "presentations", presentationId, "slides", slideId);
    await deleteDoc(docRef);
  } catch (err) {
    alert(err);
  }
};

export const getPresentations = async () => {
  const col = collection(db, "presentations");
  const snapshot = await getDocs(col);
  const presentationList = snapshot.docs.map((doc) => doc.data());

  return presentationList;
};
export const getPresentation = async (title) => {
  const docRef = collection(db, "presentations");
  const docq = query(docRef, where("title", "==", title));
  const querySnapshot = await getDocs(docq);
  const presentation = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
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
  console.log(presentationId);
  const docRef = collection(db, "presentations", presentationId, "slides");
  const querySnapshot = await getDocs(docRef);
  const slides = [];
  querySnapshot.forEach((doc) => {
    console.log({ ...doc.data(), id: doc.id });
    slides.push({ ...doc.data(), id: doc.id });
  });
  console.log(slides);
  return slides;
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

export const updateSlide = async (presentationId, slideId, data) => {
  console.log(presentationId, slideId, data);
  try {
    const slideRef = doc(
      db,
      "presentations",
      presentationId,
      "slides",
      slideId
    );

    await updateDoc(slideRef, {
      ...data,
      updated: Timestamp.now(),
    });
  } catch (err) {
    alert(err);
  }
};

// export const updateSlide = async (data) => {
//   try {
//     await doc(collection(db, "slides",data.idPresentation,"slides",data.idSlide)).update({
//       content: data.content,
//       background: data.background,
//       editor: data.editor,
//       updated: Timestamp.now() });
//   } catch (err) { alert(err); }}

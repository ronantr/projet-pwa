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
} from "firebase/firestore";

export const addPresentation = async (data) => {
  try {
    const idPresentation = await addDoc(collection(db, "presentations"), {
      ...data,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });
    console.log(idPresentation.id);
    await addDoc(collection(db, "presentations",idPresentation.id,"slides"), {
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
    await addDoc(collection(db, "slides",data.idPresentation,"slides"), {
      content: "",
      background: "",
      editor: data.editor,
      created: Timestamp.now(),
      updated: Timestamp.now(),
    });} catch (err) { alert(err); }}
export const updateSlide = async (data) => {
  try {
    await doc(collection(db, "slides",data.idPresentation,"slides",data.idSlide)).update({  
      content: data.content, 
      background: data.background,
      editor: data.editor, 
      updated: Timestamp.now() });
  } catch (err) { alert(err); }}
export const deleteSlide = async (data) => {
  try {
    await doc(collection(db, "slides",data.idPresentation,"slides",data.idSlide)).delete();
  } catch (err) { alert(err); }}

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
    presentation.push({...doc.data(),id : doc.id});
    //if (presentation === undefined) { return null; } return presentation; 
    //console.log({ids,...docq.data()}); 
    //return presentation;
    
  })
  return presentation;
  ;};
export const updatePresentation = async (data) => {
  try {
    await addDoc(collection(db, "presentations"), {
      ...data,
      updated: Timestamp.now(),
    });
    // onClose()
  } catch (err) {
    alert(err);
  }};

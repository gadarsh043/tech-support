import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = 'projects';

export const addProject = async (projectData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...projectData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting projects:', error);
    throw error;
  }
};

export const updateProject = async (projectId, projectData) => {
  try {
    const projectRef = doc(db, COLLECTION_NAME, projectId);
    await updateDoc(projectRef, {
      ...projectData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, projectId));
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}; 
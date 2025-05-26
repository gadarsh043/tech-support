import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const testFirebaseConnection = async () => {
  try {
    console.log('🔄 Testing Firebase connection...');
    
    // Test 1: Try to read from a collection
    console.log('📖 Testing read access...');
    const testCollection = collection(db, 'test');
    const snapshot = await getDocs(testCollection);
    console.log('✅ Read access successful. Documents found:', snapshot.size);
    
    // Test 2: Try to write to the collection
    console.log('✍️ Testing write access...');
    const testDoc = {
      message: 'Test connection',
      timestamp: new Date().toISOString(),
      type: 'connection_test'
    };
    
    const docRef = await addDoc(testCollection, testDoc);
    console.log('✅ Write access successful. Document ID:', docRef.id);
    
    console.log('🎉 Firebase connection test completed successfully!');
    return true;
    
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    
    if (error.code === 'permission-denied') {
      console.error('🚫 Permission denied. Please check your Firestore security rules.');
      console.error('💡 Go to Firebase Console > Firestore > Rules and update them.');
    } else if (error.code === 'unavailable') {
      console.error('🌐 Firebase service unavailable. Check your internet connection.');
    } else {
      console.error('🔧 Other error:', error.message);
    }
    
    return false;
  }
};

// Call this function in your component to test
// testFirebaseConnection(); 
import { parameters } from './index';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAU7Wvv_BelQs1EKSRMdvAOGGumsQN_oVE',
  authDomain: 'alien-shooter-52fa2.firebaseapp.com',
  projectId: 'alien-shooter-52fa2',
});

const db = firebase.firestore();

const docRef = db.collection('records').doc('cWJA0odTT8s6LXb6GXPV');

export function saveTopScores(record) {
  const records = [...parameters.topScores];
  const newRecords = [...records, record].sort((a, b) => b.score - a.score);
  if (newRecords.length > 10) {
    newRecords.pop();
  }

  return docRef
    .set({
      records: newRecords,
    })
    .then(function() {
      console.log('Document written');
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
}

export function getTopScores() {
  return docRef.get().then(doc => {
    if (doc.exists) {
      const data = doc.data().records;
      data.sort((a, b) => b.score - a.score);

      parameters.topScores = data;
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  });
}

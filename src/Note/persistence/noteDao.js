function createNoteDao(firebaseDb) {
  return {
    add: async (note) => {
      await firebaseDb.collection("notes").add(note);
    },
    getAllByUser: async (userId) => {
      let notes = [];
      const collection = await firebaseDb
        .collection("notes")
        .where("userId", "==", userId)
        .get();
      await collection.docs.forEach((doc) => {
        const date = doc.data().createdAt.toDate();
        const note = { ...doc.data(), id: doc.id, createdAt: date };
        notes.push(note);
      });
      return notes;
    },
    getById: async (id) => {
      const doc = await firebaseDb.collection("notes").doc(id).get();
      if(!doc.data()){
        return null;
      }
      const date = doc.data().createdAt.toDate();
      return { ...doc.data(), id: doc.id, createdAt: date };
    },
    removeById: async (id) => {
      await firebaseDb.collection("notes").doc(id).delete();
    },
    updateById: async (note) => {
      await firebaseDb.collection("notes").doc(note.id).update(note);
  },
  };
}

export default createNoteDao;

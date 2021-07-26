function createNoteDao(firebaseDb) {
  return {
    add: async (note) => {
      try {
        await firebaseDb.collection("notes").add(note);
        return true;
      } catch {
        return false;
      }
    },
    getAllByUser: async (userId) => {
      let notes = [];
      try {
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
      } catch {
        return false;
      }
    },
    getById: async (id) => {
      const doc = await firebaseDb.collection("notes").doc(id).get();
      if (!doc.data()) {
        return null;
      }
      const date = doc.data().createdAt.toDate();
      return { ...doc.data(), id: doc.id, createdAt: date };
    },
    removeById: async (id) => {
      try {
        await firebaseDb.collection("notes").doc(id).delete();
        return true;
      } catch {
        return false;
      }
    },
    updateById: async (note) => {
      try {
        await firebaseDb.collection("notes").doc(note.id).update(note);
        return true;
      } catch {
        return false;
      }
    },
  };
}

export default createNoteDao;

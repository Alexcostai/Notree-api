import createCRUDNoteFactory from "../src/Note/business/CRUD-NoteFactory";

const noteCRUD = createCRUDNoteFactory();

async function testAdd() {
  console.log("=================Test Add Note=================");
  const note = {
    title: "Hola",
    content: "contenidooooooo",
    color: "red"
  }
  try {
    const res = await noteCRUD.add(note)
  } catch (error) {

  }
}

async function testRemove() {
  console.log("=================Test Remove Note=================");
}

async function testUpdate() {
  console.log("=================Test Update Note=================");
}

async function testGetAll() {
  console.log("=================Test Get All User Notes=================");
}

testAdd();
// testRemove();
// testUpdate();
// testGetAll();
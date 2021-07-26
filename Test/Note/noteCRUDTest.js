import createCRUDNoteFactory from "../../src/Note/business/CRUD-NoteFactory.js";

const noteCRUD = createCRUDNoteFactory();
const userId = '0ZcyKdOeIu7JEPTT3qCf';

async function testAdd() {
  console.log("=================Test Add Note=================");
  const note = {
    title: "Hello",
    content: "Hello World!",
    color: "red",
  }
  try {
    await noteCRUD.add(note, userId);
    console.log("Note created!");
  } catch (error) {
    console.log(error);
  }
}

async function testRemove() {
  console.log("=================Test Remove Note=================");
  const noteId = '42ucTgFQ9lPJ0PPxc6RM';
  try {
    await noteCRUD.remove(noteId);
    console.log("Note removed");
  } catch (error) {
    console.log(error);
  }
}

async function testUpdate() {
  console.log("=================Test Update Note=================");
  const note = {
    id:'cosZmWXIgTGD4NP8QOdl',
    title: "Hello!!",
    content: "Hello World!",
    color: "white",
  }
  try {
    await noteCRUD.update(note, userId);
    console.log("Note updated!");
  } catch (error) {
    console.log(error);
  }
}

async function testGetAll() {
  console.log("=================Test Get All User Notes=================");
  try {
    const res = await noteCRUD.getAll(userId);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

testAdd();
// testRemove();
// testUpdate();
// testGetAll();
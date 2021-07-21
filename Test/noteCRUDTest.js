import createCRUDNoteFactory from "../src/Note/business/CRUD-NoteFactory";

const noteCRUD = createCRUDNoteFactory();

async function testAdd(){
    console.log("=================Test Add Note=================");
}

async function testRemove(){
    console.log("=================Test Remove Note=================");
}

async function testUpdate(){
    console.log("=================Test Update Note=================");
}

async function testGetAll(){
    console.log("=================Test Get All User Notes=================");
}

testAdd();
// testRemove();
// testUpdate();
// testGetAll();
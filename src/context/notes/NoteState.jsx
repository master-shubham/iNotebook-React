import { useState } from 'react'
import NoteContext from './noteContext'
import Swal from 'sweetalert2'


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    //get All notes
    const getNotes = async () => {
        // API call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

        });
        const json = await response.json();
        setNotes(json);
    }


    // Add a note.

    const addNote = async (title, description, tag) => {
        // call API
        // API call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note =await response.json();
        setNotes(notes.concat(note))
    }

    // Delete a note

 const deleteNote = async (id) => {
   const result = await Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to recover this note!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#d33",
     cancelButtonColor: "#3085d6",
     confirmButtonText: "Yes, delete it!",
   });

   // ✅ If user confirms
   if (result.isConfirmed) {
     await fetch(`${host}/api/notes/deletenote/${id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem("token"),
       },
     });

     const newID = notes.filter((note) => note._id !== id);
     setNotes(newID);

     // success popup
     Swal.fire("Deleted!", "Your note has been deleted.", "success");
   }
 };

    // Edit a note 
    const editNote = async (id, title, description, tag) => {
        // API call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

     
        let NewNote = JSON.parse(JSON.stringify(notes))

        // logic to edit in client
        for (let i = 0; i < NewNote.length; i++) {
            const element = NewNote[i];
            if (element._id === id) {
                NewNote[i].title = title;
                NewNote[i].description = description;
                NewNote[i].tag = tag;
                break;
            }

        }
        setNotes(NewNote);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

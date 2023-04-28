import React, { useState, useEffect  } from "react";
import Note from "./note";
import Navbar from "./Navbar";

function Notes() {
  //states
  // const ref = useRef();
  const [data, setData] = useState([]);
  const [note, setNote] = useState({ title: "", description: "" });
  // const [enote, seteNote] = useState({ etitle: "", edescription: "" });
  // const [unote, setuNote] = useState({ title: "", description: "" ,id:""});
  //FETCHING ALL NOTES
  async function FetchNotes() {
    const url = "http://127.0.0.1:5000/api/notes/allnotes";
    const response = await fetch(url);
    const parsedData = await response.json();
    setData(parsedData);
  }

  //CALLING FetchNotes ON FIRST RELOAD
  useEffect(() => {
    FetchNotes();
  }, []);

  //ADDING A NOTE
  const AddNote = async () => {
    const { title, description } = note;
    const url = "http://127.0.0.1:5000/api/notes/addnote";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    setData(data.concat(await response.json()));
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  //DELETING A NOTE
  const DeleteNote = async (id) => {
    // API END
    const url = `http://127.0.0.1:5000/api/notes/deletenote/${id}`;
    // eslint-disable-next-line
    const response = await fetch(url, {
      method: "DELETE",
    });

    // UI END
    const newNotes = data.filter((note) => {
      return id !== note._id;
    });
    setData(newNotes);
  };
  // UPDATE AN EXISTING NOTE
  // const UpdateNote = async (id) => {
  //   let { etitle, edescription } = enote;
  //   const title=etitle;
  //   const description=edescription;
  //   // API END
  //   const url = `http://127.0.0.1:5000/api/notes/editnote/${id}`;
  //   // eslint-disable-next-line
  //   const response = await fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
      
  //     body: JSON.stringify({title,description}),
  //   });
  //   // UI END
    
  // };
  // const onchangeUpdate=(e)=>{
  //   e.preventDefault();
  //   seteNote({...enote,[e.target.name]:e.target.value})
  // }
  // const callUpdate = (id)=>{
  //   ref.current.click();
  //   for (let index = 0; index < data.length; index++) {
  //     if(data[index]._id === id){
  //       const note = data[index];
  //       setuNote({title:note.title,description:note.description,id:note._id})
  //     }
  //     else{
  //       continue;
  //     }
      
  //   }
  // }
  return (
    <div>
      <Navbar/>
      {/* // FORM FOR ADDING A NEW NOTE */}
      
      <div className="container my-4">
        <h2>Add Note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="title"
            name="title"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            onChange={onchange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={AddNote}>
          Add Note
        </button>
      </div>

      {/* MODAL TO UPDATE A NOTE  */}
      {/* <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  onChange={onchangeUpdate}
                  value={unote.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  rows="3"
                  onChange={onchangeUpdate}
                  value={unote.description}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={()=>{UpdateNote(unote.id)}}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div> */}


      {/* // SECTION WHERE ALL NOTES WILL APPEAR */}
      <div className="row mx-5 ">
        <h2>Your Notes</h2>
        {data.map((note) => (
          <Note
            title={note.title}
            key={note._id}
            description={note.description}
            note={note}
            delete={() => {
              DeleteNote(note._id);
            }}
            // update={() => {
            //   callUpdate(note._id);
            // }}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;

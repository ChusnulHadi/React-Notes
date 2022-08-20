import { useState } from "react";

const FormInput = ({ addNotes }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChange = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        setBody(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addNotes({ title, body });
    }

    return <form className="note-input" onSubmit={onSubmit}>
        <h2 className="note-input__title" >Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter : {20 - title.length}</p>
        <input className="" type="text" name="title" placeholder="Judul" required value={title} onChange={onTitleChange} maxLength={20} />
        <textarea className="note-input__body" placeholder="Isi catatan" value={body} onChange={onBodyChange} />
        <button>Submit</button>
    </form>
}

export default FormInput;

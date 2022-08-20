import { useState } from "react";

const NoteSearch = ({ searchNotes }) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
        searchNotes(value)
    }

    return <input className="note-search" type="text" placeholder="Search for notes" value={value} onChange={onChange} />
}

export default NoteSearch;
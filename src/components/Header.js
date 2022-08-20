import NoteSearch from "./NoteSearch";

const Header = ({ searchNotes }) => {
    return <div className="note-app__header">
        <h1>React Notes</h1>
        <NoteSearch searchNotes={searchNotes} />
    </div>
}

export default Header;
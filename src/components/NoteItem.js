const NoteItem = ({ note, onDelete, onArchive }) => {

    const deleteHandler = (event) => {
        event.preventDefault();
        onDelete(note.id)
    }

    const archiveHandler = (event) => {
        event.preventDefault();
        onArchive(note.id)
    }

    return <div className="note-item">
        <div className="note-item__content">
            <h3 className="note-item__title">{note.title}</h3>
            <h4 className="note-item__date">{note.createdAt}</h4>
            <p className="note-item__body">{note.body}</p>
        </div>
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={deleteHandler}>Hapus</button>
            <button className="note-item__archive-button" onClick={archiveHandler}>Arsipkan</button>
        </div>
    </div>
}

export default NoteItem;
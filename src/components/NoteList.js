import NoteItem from "./NoteItem";

const NoteList = ({ list, onDelete, onArchive }) => {
    const activeNotes = list.filter(note => note.archived === false);
    const archivedNotes = list.filter(note => note.archived === true);
    return (
        <>
            <h2>Aktif</h2>
            <div className="notes-list">
                {activeNotes.length === 0 &&
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
                {activeNotes.map((note, index) => (
                    <NoteItem key={index} note={note} onDelete={onDelete} onArchive={onArchive} />
                ))}
            </div>
            <h2>Arsip</h2>
            <div className="notes-list">
                {archivedNotes.length === 0 &&
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
                {archivedNotes.map((note, index) => (
                    <NoteItem key={index} note={note} onDelete={onDelete} onArchive={onArchive} />
                ))}
            </div>
        </>
    )
}

export default NoteList;
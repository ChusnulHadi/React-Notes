import { getInitialData } from "../utils";
import FormInput from "./FormInput";
import Header from "./Header";
import NoteList from "./NoteList";
import React from "react";


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            filteredNotes: undefined
        }
        this.addNotes = this.addNotes.bind(this);
        this.searchNotes = this.searchNotes.bind(this);
        this.deleteNotes = this.deleteNotes.bind(this);
        this.archiveNotes = this.archiveNotes.bind(this);

    }

    componentDidMount() {
        this.setState({
            filteredNotes: this.state.notes
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.notes !== this.state.notes) {
            this.setState({
                filteredNotes: this.state.notes
            })
        }
    }

    searchNotes(title) {
        if (title === '') {
            this.setState({ filteredNotes: this.state.notes })
        } else {
            this.setState({
                filteredNotes: this.state.notes.filter(note => note.title.toLowerCase().includes(title.toLowerCase()) || note.body.toLowerCase().includes(title.toLowerCase()))
            })
        }
    }

    addNotes({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toLocaleString(),
                        archived: false
                    }
                ]
            }
        })
    }

    deleteNotes(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    archiveNotes(id) {
        const notes = this.state.notes
        notes.map(note => {
            if (note.id === id) {
                note.archived = !note.archived;
            }
        });
        this.setState({ notes })
    }

    render() {
        return (
            <>
                <Header searchNotes={this.searchNotes} />
                <div className="note-app__body">
                    <FormInput addNotes={this.addNotes} />
                    {this.state.filteredNotes && (
                        <NoteList list={this.state.filteredNotes} onDelete={this.deleteNotes} onArchive={this.archiveNotes} />
                    )}
                </div>
            </>
        )
    }
}

export default NoteApp;
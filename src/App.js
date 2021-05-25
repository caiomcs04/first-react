import NotesList from "./components/NotesList/NotesList"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import CategoryList from "./components/CategoryList/CategoryList"
import "./assets/App.css"
import "./assets/index.css"
import React, { Component } from "react"



class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  handleNote(title, text) {
    const newNote = { title, text }
    const newNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newNotes
    }
    this.setState(newState)
  }

  deleteNote(index) {
    let notes = this.state.notes
    notes.splice(index, 1);
    this.setState({ notes: notes })
  }

  render() {
    return (
      <section className="conteudo">
        <RegisterForm handleNote={this.handleNote.bind(this)} />
        <main className="conteudo-principal">
          <CategoryList />
          <NotesList
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes} />
        </main>

      </section>
    )
  }
}

export default App;

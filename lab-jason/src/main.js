import './style/main.scss';

const uuidv1 = require('uuid/v1');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/navbar';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuidv1(),
      edited: false,
      completed: false,
      content: '',
    };
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNote(this.state.id,this.state.edited,this.state.completed,this.state.content);
    this.setState({
      id: uuidv1(),
      content: ''
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Create a Note:
          <input
            type='text'
            name='note'
            placeholder='...'
            value={this.state.content}
            onChange={this.handleContentChange}/>
        </label>
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.createNote = this.createNote.bind(this);
  }

  componentDidMount(){
    console.log('mounted');
  }

  componentDidUpdate(){
    console.log('State', this.state);
  }

  createNote(id,edited,completed,content){
    let newNote = {};
    newNote.id = id;
    newNote.edited = edited;
    newNote.completed = completed;
    newNote.content = content;
    this.setState({
      notes: this.state.notes.concat([{newNote}])
    });
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <section>
            <Navbar>
            </Navbar>
            <Switch>
              <Route exact path="/" component={() => <h1>Home</h1>} />
              <Route exact path="/notes" component={() => (<NoteCreateForm  createNote={this.createNote}/>)} />
              <Route component={() => <h1>Not Found</h1>} />
            </Switch>
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

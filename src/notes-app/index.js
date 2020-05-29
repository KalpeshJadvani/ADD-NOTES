import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { addNote, curentTab } from '../actions';

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      title: '',
    };
  }
  addNotes = () => {
    const { title, status } = this.state;
    if (title === undefined || title === '') {
      alert('please Enter title');
      return;
    } else if (status === undefined || status === '') {
      alert('please Enter status');
      return;
    }

    this.props.addNote({
      notes: [{ title, status }],
      tab: 'All',
    });
    this.setState({ status: '', title: '' });
  };

  openTab = (tab) => {
    this.props.curentTab(tab);
  };

  getName = (e) => {
    const val = e.target.value;
    this.setState({
      title: val,
    });
  };

  getStatus = (e) => {
    const val = e.target.value;
    this.setState({
      status: val,
    });
  };

  render() {
    // console.log(this.props);
    const { title, status } = this.state;
    const { notes, tab } = this.props;
    //console.log('name', title, ' status ', status, 'tab', tab);
    return (
      <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input
            data-testid="input-note-name"
            onChange={(e) => this.getName(e)}
            type="text"
            value={title}
            className="large mx-8"
            placeholder="Note Title"
          />
          <input
            data-testid="input-note-status"
            onChange={(e) => this.getStatus(e)}
            type="text"
            value={status}
            className="large mx-8"
            placeholder="Note Status"
          />
          <button
            className=""
            data-testid="submit-button"
            onClick={this.addNotes}
          >
            Add Note
          </button>
        </section>

        <div className="mt-50">
          <ul className="tabs">
            <li
              className={`tab-item slide-up-fade-in ${
                tab === 'All' ? 'tab-item-active' : ''
              }`}
              data-testid="allButton"
              onClick={(e) => this.openTab('All')}
            >
              All
            </li>
            <li
              className={`tab-item slide-up-fade-in ${
                tab === 'Active' ? 'tab-item-active' : ''
              }`}
              data-testid="activeButton"
              onClick={(e) => this.openTab('Active')}
            >
              Active
            </li>
            <li
              className={`tab-item slide-up-fade-in ${
                tab === 'Completed' ? 'tab-item-active' : ''
              }`}
              data-testid="completedButton"
              onClick={(e) => this.openTab('Completed')}
            >
              Completed
            </li>
          </ul>
        </div>
        <div className="card w-40 pt-30 pb-8">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody data-testid="noteList">
              {notes.map((item, index) => {
                if (tab.toLowerCase() === 'all') {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                } else {
                  if (tab.toLowerCase() === item.status.toLowerCase()) {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.status}</td>
                      </tr>
                    );
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes,
    tab: state.tab,
  };
};
const mapDispatchToProps = {
  addNote,
  curentTab,
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);

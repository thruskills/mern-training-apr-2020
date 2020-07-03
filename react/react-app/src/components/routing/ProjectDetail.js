import React from 'react';
import { Button } from 'react-bootstrap';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      detail: null,
    };
  }
  componentDidMount() {
    fetch(
      `http://localhost:3030/v1/projects/${this.props.match.params.alias}`,
      {
        headers: { 'x-api-key': 'abcd1234' },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          // set the state
          this.setState({
            isLoaded: true,
            detail: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  deleteProject = (event) => {
    const url = `http://localhost:3030/v1/projects/${this.state.detail.slug}`;
    fetch(url, { method: 'DELETE', headers: { 'x-api-key': 'abcd1234' } })
      .then((res) => res.json())
      .then(
        (result) => {
          // once we delete this page? what should we do? redirect to home/project list...
          console.log(result);
          this.setState({
            isLoaded: true,
            detail: null,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    const { error, isLoaded, detail } = this.state;
    if (error) {
      return <div>Something went wrong! {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (detail !== null) {
      return (
        <div>
          <h1>{detail.name}</h1>
          <img
            src={`http://localhost:3030/v1/projects/${detail.slug}/photo`}
            width='100%'
            alt={detail.name}
          />
          <br />
          <br />
          <p>{detail.description}</p>
          <hr />
          <Button variant='danger' onClick={this.deleteProject}>
            Delete Project
          </Button>
        </div>
      );
    } else {
      return <div>No content</div>;
    }
  }
}

export default ProjectDetail;

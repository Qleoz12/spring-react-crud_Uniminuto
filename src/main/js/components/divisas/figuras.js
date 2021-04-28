import React from "react"
import {Button, Container} from "reactstrap"
import {Link, withRouter} from "react-router-dom"


class Figura extends React.Component {


 constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);

      this.handle = this.handle.bind(this);

    }
    
    handle(event) {
      event.preventDefault();
      alert('asdfasd '+this.state.numberOfGuests)
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>


          <button value="Submit" onClick={this.handle} >aaa</button>
        </form>
      );
    }
  }

export default withRouter(Figura)

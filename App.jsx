import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"shubham",
               "age":"20"
            },
            {
               "id":2,
               "name":"arpit",
               "age":"23"
            },
            {
               "id":3,
               "name":"rishabh",
               "age":"26"
            },
            {
               "id":4,
               "name":"sachin",
               "age":"24"
            },
				
            {
               "id":5,
               "name":"mishra",
               "age":"24"
            },
            {
               "id":6,
               "name":"naman",
               "age":"26"
            }
         ]
      }
   }
	
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id} : </td>
            <td>{this.props.data.name} : </td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
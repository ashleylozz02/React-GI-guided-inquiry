import { render } from '@testing-library/react';
import React, { Component } from 'react'
import basicInfo from "./component/basicInfo";


class App extends React.Component {
  ///consturctor///
  constructor(props) {
    super(props);

    this.state = {
      personInfo: [
         {
          fristName: "Ashley",
          lastName: "Lorenzo",
          number: "1",
          dateOfBirth: "11/26/2002",
          occupation:'Coding appretice',
          favColor:"Pink",
        },
   
        {
          firstname: "Kayla",
          lastName:"Lorenzo",
          number: "2",
          dateOfBirth: "12/12/2003",
          occupation:'Kitchen staff salad maker',
          color:"Yellow"
        },

        {
          name: "Abigail",
          lastName:"Lorenzo",
          number: "3",
          dateOfBirth: "10/09/2008",
          occupation:"8th grade",
          color:'Red'
        },
        {
        name: "Johnny",
          lastName:"Lorenzo",
          number: "4",
          dateOfBirth: "12/27/2013",
          occupation:"3rd grade",
          color:'blue'
        },
      ]
    };
  } 
 
  render() {
    return this.state.personInfo.map(function (person, index) {
      return <basicInfo key={index} person={person} />;
    })
  }
}

export default App;

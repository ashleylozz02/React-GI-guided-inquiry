import React from 'react';

class basicInfo extends React.Component {  
constructor(props){  
  super(props);  
}  
render() {
return (
  
   <div className="personInfo">
   <h1>Name:</h1>
   <p>{this.props.person.name}</p>
   <h1>Number:</h1>
   <p>{this.props.person.number}</p>
   <h1>Date Of Birth:</h1>
   <p>{this.props.person.dateOfBirth}</p>
   <h1>Occupation:</h1>
   <p>{this.props.person.occupation}</p>
   <h1>Favorite color:</h1>
   <p>{this.props.person.favColor}</p>
 </div>
 );
}
}

export default basicInfo;
import React from 'react';

class Jumbotron extends React.Component{
    render(){
        const mystyle = {
            marginBottom:0
          };
        return(
            <div class="jumbotron text-center" style={mystyle}>
                <h1>Data Cuaca, Gempa dan Tsunami</h1>
                <p>Temukan data Cuaca Provinsi, Gempa dan Tsunami melalui aplikasi ini</p> 
            </div>
        );
    }
}

export default Jumbotron;

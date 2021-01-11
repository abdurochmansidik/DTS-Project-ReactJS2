import React from 'react';

class Gempa extends React.Component {
    render(){
      return(
        <div class="jumbotron">
            <h2>Gempa Bumi</h2>
          <table class="table table-striped table-dark table-hover text-center" >
              <thead class="thead-dark">
                <tr>
                  <th>Waktu Gempa</th>
                  <th>Lintang</th>
                  <th>Bujur</th>
                  <th>Magnitudo</th>
                  <th>Kedalaman</th>
                  <th>Wilayah</th>
                </tr>
              </thead >
              <tbody >
                <tr>
                  <td>19-Oct-20<br/>16:38:49 WIB </td>
                  <td>2.88</td>
                  <td>96.22</td>
                  <td>5.4</td>
                  <td>11 Km</td>
                  <td>48 km Barat Laut SINABANG-ACEH</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
    }
  }
  
  export default Gempa;
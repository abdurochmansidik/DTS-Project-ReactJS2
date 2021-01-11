import React from 'react';

class Tsunami extends React.Component {
    render(){
      return(
        <div class="jumbotron">
          <h2>Gempa Bumi</h2>
          <table class="table table-striped table-dark table-hover text-center" >
              <thead class="thead-dark">
                <tr>
                  <th>Tanggal/Jam</th>
                  <th>Lokasi</th>
                  <th>Magnitude</th>
                  <th>Kedalaman</th>
                  <th>Wilayah</th>
                </tr>
              </thead >
              <tbody >
                <tr>
                  <td>19-Oct-20<br/>16:38:49 WIB</td>
                  <td>1.67 - 126.39</td>
                  <td>7.1 SR</td>
                  <td>73 Km</td>
                  <td>137 km Barat Laut JAILOLO-MALUT</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
    }
  }
  
  export default Tsunami;
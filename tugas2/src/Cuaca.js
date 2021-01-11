import React from 'react';

class Cuaca extends React.Component {
    render(){
      const mystyle = {fontSize:'20px'};
      const elements = ['Aceh', 'Sumatera Utara', 'Riau', 'Lampung'];
      return(
        <div class="jumbotron text">
            <h2>Cuaca Provinsi</h2>
         <form>
         <div class="form-group" controlId="exampleForm.ControlSelect2">
            <select as="select" class="form-control " id="exampleFormControlSelect2" style={mystyle}>
            {elements.map((value, index) => {
                return <option value={index}>{value}</option>
              })}
            </select>           
        </div>
        <div class="text-center">
            <button class="btn btn-secondary btn-lg" variant="primary " onClick="" >
              Cari
            </button>
        </div>
         </form>
            <br/><br/>
            <table class="table table-striped table-dark table-hover text-center" >
              <thead class="thead-dark">
                <tr>
                  <th>Nama Kota</th>
                  <th>Prakiraan Cuaca</th>
                  <th>Suhu ( °C )</th>
                  <th>Kelembapan ( % )</th>
                </tr>
              </thead >
              <tbody >
                <tr>
                  <td>Banda Aceh</td>
                  <td>Cerah Berawan</td>
                  <td>23 - 32</td>
                  <td>65 - 95</td>
                </tr>
              </tbody>
            </table>
        </div>
      )
    }
  }
  
  export default Cuaca;
  
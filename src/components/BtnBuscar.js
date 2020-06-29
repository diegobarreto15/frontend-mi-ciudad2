import React from 'react'

class BtnBuscar extends React.Component{

    render(){
        return(
            <div className="report-section">
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text"
                     placeholder="Buscar" />
            </div>
        </div>
        )
    }
}
export default BtnBuscar;
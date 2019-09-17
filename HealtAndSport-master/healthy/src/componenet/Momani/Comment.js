import React ,{Component}from 'react';

class Comment extends Component{
    state={}

    render(){
 
        return (
          
        <>
    
       <div> <hr></hr> {this.props.elem} </div>
       {/* <div className="container">
<button  type="button"  className="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"style={{position:"absolute",Top:"5px",float:"right", fontFamily:"Amaranth"}}>Report</button>
 <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">
   
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title" style={{fontFamily:"Amaranth" }}>Reporte Message</h4> <img style={{maxWidth:'30px', maxHeight:'30px'}} src={require('../Assets/envelope.svg')}></img>
       </div>
       <div className="modal-body" style={{fontFamily:"Amaranth" }}>
         <h5>Thank you for submitting  a Report</h5>
       </div>
       <div className="modal-footer">
         <button onClick={this.model} type="button" className="btn btn-danger" data-dismiss="modal" style={{fontFamily:"Amaranth" }}>Close</button>
       </div>
     </div>
     
   </div>
 </div>
 
</div> */}

          </>
        );
      


    }

}
export default Comment
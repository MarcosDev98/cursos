import React from "react";

class SignUp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="card-register">
                            <label htmlFor="">usuario</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="">contraseña</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>


                </div>
            


            </React.Fragment>
        )
    }


}


export default SignUp

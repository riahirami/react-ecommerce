import React from 'react'


function Contact(){
    return(
       
       <div className="container jumbotron">
            
                <h1>contactez-nous</h1>

                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form4Example1">Name</label>
                        <input type="text" id="form4Example1" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form4Example2">Email address</label>
                        <input type="email" id="form4Example2" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form4Example3">Message</label>
                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-check-label" for="form4Example4">
                        Send me a copy of this message
                        </label>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
            </form>
        </div>
    )
}


export default Contact
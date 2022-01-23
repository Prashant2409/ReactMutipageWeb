import React, { useState } from 'react';


const Contact = () => {
     
    const [userData,setUserData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value= event.target.value;

        setUserData({...userData,[name]:value});
    }


    const submitData  = async (event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            phone,
            email,
            address,
            message
        } = userData;

        if(  firstName &&
            lastName &&
            phone &&
            email &&
            address &&
            message){

            

        const res = fetch('https://reactmultipagewebsite-default-rtdb.firebaseio.com/userDataRecords.json',
      { method : 'POST',
        headers: {
            'Content-Type':"application/json",
        },
        body:JSON.stringify({
            
                firstName,
                lastName,
                phone,
                email,
                address,
                message,
            
        }),
    }
    );
      
    if(res) {
        setUserData({
            
                firstName:"",
                lastName:"",
                phone:"",
                email:"",
                address:"",
                message:"",
            
        });
        alert('Data Stored');
    }
    else{
        alert('plz fill data');
    }
}
else{
    alert('plz fill data');
}
    };

    return(
    
      <>
       <section className="contactus-section">
       <div className='container'>
           <div className = "row">
               <div className='col-12 col-lg-10 mx-auto'>
               <div className="row">
               <div className='contact-leftside col-12 col-lg-5'>
                   <h1 className='main-heading fw-bold'>
                    Connect With Our <br/> Sales Team.

                   </h1>
                   <p className='main-hero-para'>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis.
                   </p>
                   <figure>
                       <img src='./images/hero1.jpg' alt='contactusImg' className='img-fluid'/>
                   </figure>
               </div>

                  <div className='contact-rightside col-12 col-lg-7'>
                      <form method='POST'>
                        
                           <div className="row">
                            <div className='col-12 col-lg-6 contact-input-feild'>
                             <input className='form-control' type='text' name='firstName' id='' value={userData.firstName} onChange={postUserData} placeholder='First Name'/>
                            </div>

                            <div className='col-12 col-lg-6 contact contact-input-feild'>
                             <input className='form-control' type='text' name='lastName' id='' value={userData.lastName} onChange={postUserData} placeholder='Last Name'/>
                            </div>

                           </div>
                          

                           <div className="row">
                            <div className='col-12 col-lg-6 contact-input-feild'>
                             <input className='form-control' type='text' name='phone' id='' value={userData.phone} onChange={postUserData} placeholder='Phone Number'/>
                            </div>

                            <div className='col-12 col-lg-6 contact-input-feild'>
                             <input className='form-control' type='text' name='email' id='' value={userData.email} onChange={postUserData} placeholder='EmailId'/>
                            </div>

                           </div>

                           <div className='row'>
                            <div className='col-12 contact-input-feild'>
                                <input className='form-control' type='text' name='address' id='' value={userData.address} onChange={postUserData} placeholder='Add Address'/>
                            </div>
                           </div>

                           <div className='row'>
                            <div className='col-12 contact-input-feild'>
                                <input className='form-control' type='text' name='message' id='' value={userData.message} onChange={postUserData} placeholder='Enter Your Message'/>
                            </div>
                           </div>


                           <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the Instapay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                            
                            <button type='submit' className='btn btn-style w-100' onClick={submitData}>
                             Submit
                            </button>
                      </form>
                  </div>
               </div>
               </div>
           </div>
       </div>
       </section>
       
      </>

    );
}

export default Contact;
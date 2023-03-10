import React, {useState} from "react";
import GoogleMap from "./GoogleMap";
import { Stack } from "@mui/system";


const ContactInfo = () => {
  const [googleMapApi, setgoogleMapApi] = useState(true);

  const GoogleMapAPI = ()=>{
    setgoogleMapApi(false)
  }
  


  return (

    <div className="contactInfo container">

        <div class="testimonials">
          <div class="container">
            <div className="text-center" style={{marginTop:'8vmin', marginBottom:"4vmin"}}>
              <h1 className="fw-semibold" style={{fontSize:"5vmin"}}>Contact US</h1>
            </div>
          </div>
        </div>
      <div className="row" >
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>(02) 8808-5901</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info" onClick={GoogleMapAPI}>
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Main Office</h5>
            <p>Manila, PH</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <h5>Fax</h5>
            <p>(02) 8808-5901</p>
          </div>
        </div>
        {!googleMapApi ? (
            <Stack 
              sx={{marginTop: '4rem'}}
              >
                <GoogleMap/>
              </Stack>
                )  
                : <></>}
      </div>
    

    
    </div>

  );
};

export default ContactInfo;

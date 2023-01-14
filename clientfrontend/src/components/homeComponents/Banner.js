import Video2 from "../video/Video2.mp4";


const Banner = () => {
    return(
      <>
        <video className="w-100" src={Video2} autoPlay loop muted ></video>
        {/* <div className="text-center" style={{marginTop:'8vmin', marginBottom:"4vmin"}}>
          <p className="fw-semibold" style={{fontSize:"7vmin"}}>Products</p>
        </div> */}

        <div class="testimonials">
          <div class="container">
            <div className="text-center" style={{marginTop:'8vmin', marginBottom:"4vmin"}}>
              <h1 className="fw-semibold" style={{fontSize:"7vmin"}}>Products</h1>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Banner;
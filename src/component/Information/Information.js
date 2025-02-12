import React, { useState } from 'react';
import './Information.css'
import { ToastContainer, toast } from 'react-toastify';
const Information = (props) => {
    const [addBreaks, setBreaks] = useState(0);
    function breakTimes(value){
       setBreaks(value + addBreaks)
    }
    const {times} = props
    let exerciseTime = 0;
    for(const time of times ){
        exerciseTime = exerciseTime + time.time;
    }
    function toastPopUp(){
        toast(`You done it!`, {
            position: "top",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      
    }
    return (
        <div className='information-container'>
           <div className="information-head">
           <img className='pro-img' src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/431908698_7555603047835094_5642339464467391539_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7-R_u3anxgsQ7kNvgGDY9DF&_nc_ht=scontent.fdac135-1.fna&cb_e2o_trans=q&oh=00_AYCIhepkrcZoNBpr8EDPn2bXWxJAOLodWJBsrRXTzmTg7w&oe=66656AE4" alt="" />
           <div className='information-head-name'>
            <h3>Abs Sujan</h3>
            <small>Dhaka, Bangladesh</small>
           </div>
           </div>
           <div className="health-information">
            <div className="weight">
                <p>75<span className='kg'>kg</span></p>
                <small>weight</small>
            </div>
            <div className="height">
                <p>5.9<span className='kg'>Inch</span></p>
                <small>Height</small>
            </div>
            <div className="health-age">
                <p>30<span className='kg'>yrs</span></p>
                <small>Age</small>
            </div>
           </div>
           <div className="add-break">
            <h4>Add A Break</h4>
            <div className="health-information-add-break">
                <p onClick={() => breakTimes(10)}>10s</p>
                <p onClick={() => breakTimes(20)}>20s</p>
                <p onClick={() => breakTimes(30)}>30s</p>
                <p onClick={() => breakTimes(40)}>40s</p>
                <p onClick={() => breakTimes(50)}>50s</p>
            </div>
           </div>
           <div className="exercise-details">
            <h4>Exercise Details</h4>
            <div className="health-information-exercise-details">
                <div className='exercise-box'>
                    <p>Exercise Time</p>
                    <small>{exerciseTime} mints</small>
                </div>
                <div className='exercise-box'>
                    <p>Break Time</p>
                    <small>{addBreaks}s</small>
                </div>
            </div>
           </div>
        
           <button onClick={toastPopUp} className='health-btn'>Activity Completed</button>
           <ToastContainer />
        </div>
    );
};

export default Information;
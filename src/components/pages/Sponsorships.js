import React, {useState} from 'react'
import './Sponsorships.css'
// function show() {
//     /* Access image by id and change
//     the display property to block*/
//     document.getElementById('image').style.display = "block";
//     document.getElementById('btnID').style.display = "none";
// }

// function Sponsorships() {
//   return (
//     <div>
//         <h1>Hello</h1>
//         <h3>Click on the button to see image</h3>
//         <image id="image" src="/images/bank_me_bitch.png" alt="banking image" />
//         <button type="button" onclick="show()" id="btnID">
//             Show Image
//         </button>
//         {show}
//     </div>
//   )
// }

// export default Sponsorships
const Sponsorships = () => {
    const [isImageActive, setIsImageActive] = useState(false);
  
    function clickEventHandler() {
      setIsImageActive(true);
    }
  
    return (
      <div>
        <button className='image' onClick={clickEventHandler}>Activate image</button>
  
        {isImageActive && <img  src="/images/bank_me_bitch.jpg" alt="BANK" />}
      </div>
    );
  };
  
  export default Sponsorships;
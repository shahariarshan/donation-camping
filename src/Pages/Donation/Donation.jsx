import { useEffect, useState } from "react";

import DonationCards from "./DonationCards";


const Donation = () => {
    const [donation,setDonation] =useState([])
    const [dataFind,setDataFind] = useState(false)
    const [isShow,setIsShow]=useState(4)

    useEffect(() =>{
        const donation = JSON.parse (localStorage.getItem("donationAdded"));
        if(donation){
            setDonation(donation)
        }
        else {
            setDataFind("Here is no data!!!")
        }


    },[])
    // console.log(donationAdded)
    // console.log(donation)
    console.log(isShow)
    return (
        <div>
          {dataFind? <p className="h-[80vh] flex font-extrabold text-4xl justify-center items-center">{dataFind}</p>: <div></div>}
          <div  className="grid  grid-cols-1 lg:grid-cols-2 gap-6 my-5">
            {
                 donation.slice(0,isShow).map (item => <DonationCards key={item.id} item={item}></DonationCards>)
            }
        </div>
        <div className={isShow === donation.length && 'hidden'}>
        <button onClick={() => setIsShow(donation.length )}  className="btn font-medium  text-white bg-orange-700 block mx-auto">See All </button>
        </div>
        
        </div>
       
    );
};

export default Donation;
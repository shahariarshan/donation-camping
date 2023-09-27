// import { useLoaderData } from "react-router-dom";
// import { useRef, useState } from "react";
// import { document } from "postcss";
// import Donation from "../../../Pages/Donation/Donation";

const Banner = () => {
  // const donation =useLoaderData()
  //   const [fullCampaigns, setFullCampaigns] =useState(donation)
  //   const [searchValue,setSearchValue] = useState(donation);
  //   const handelSearch = (e) => {
  //     const search = document.getElementById ("searchInput").value;
  //     console.log(search)
  //     e.preventDefault();
      
  //     if(search.value){
  //       const filterCampaigns = fullCampaigns.filter((donation) => donation.category.toLowerCase() === search.toLowerCase());
  //       if(filterCampaigns){
  //         setSearchValue(filterCampaigns);
  //       }
  //       else{
  //         setSearchValue(fullCampaigns)
  //       }
  //     }
  //   }
    
    
    
  
    return (
        <div className="mx-auto container">
        <div className="hero min-h-screen text-opacity-80 bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/wzT6pvT/26477318-donation.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-black text-opacity-100">I Grow By Helping People In Need</h1>
          
          <div className="form-control">
          <input type="text" 
          id="element"
          placeholder="Search.."
          
           className="input input-bordered md:w-auto " />
          <div className="mt-5">
       <button onClick={"handelSearch"} className="btn btn-error">Search</button>
       </div>
        </div>
        
       
        </div>
      </div>
    </div>
    {/* <div>
      {
        searchValue?.map((donation)=> (<Donation key={donation.id} donation={donation}></Donation>))
      }
    </div> */}
     </div>
    );
};

export default Banner;
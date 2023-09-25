import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DisplayCard from "./DisplayCard";


const SingleCard = () => {
    const [item,setItems] = useState()
    const {id} = useParams();
    console.log(id);

    const donation = useLoaderData();
    // console.log(cards);

    useEffect(()=>{
        const findCards = donation?.find( item => item.id == id);

        console.log(findCards)
        setItems(findCards)
    },[id,donation])
    return(
        <div>
            <DisplayCard item={item}></DisplayCard>
        </div>
    );


    
};

export default SingleCard;
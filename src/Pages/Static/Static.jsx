

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';






const Static = () => {

    const allData = useLoaderData();
    const [donations,setDonation]=useState([]);

    useEffect(()=>{
        const donation=JSON.parse(localStorage.getItem('donationAdded'));
        if(donation){
            setDonation(donation)
        }
    },[]);
    console.log(allData)
    
    const data = [
        { name: 'Group A', value: allData.length },
        { name: 'Group b', value: donations.length },
      
      ];
      console.log(data)
      
      const COLORS = ['#0088FE', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
      return (
        <div>
        <div className=" flex justify-center ">
         
           
           <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
           
               
                
        </div>
        <div className=" flex justify-center mb-14">
            <div>
            <div className="flex  gap-3   ">
             <h2 className="font-medium">Your Donation:</h2>
                <p className="border-5 border-white bg-[#0088FE] h-3 w-20 rounded-full mt-2"></p>
             </div>
                   
             <div className="flex gap-3">
             <h2 className="font-medium">Total Donation:</h2>
                <p className="border-5 border-white bg-[#00C49F] h-3 w-20 rounded-full mt-2"></p>
             </div> 
            </div>
                   
                </div>  
        </div>
    );
     
      };




    


export default Static;
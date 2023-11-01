import React, { useState } from "react";
import img_bottom_text from './img_bottom_text.png';
import img_top_text from './img_top_text.png';
import img_middle_01 from './img_middle_01.png';
import img_btn from './img_btn.png';
import { useMediaQuery } from 'react-responsive';
const Test = () => {

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.screen.height);

    const Top=()=>{
      if(width <= 400){
        return  <div className="mt-10 " >
        <img alt="a" className="w-80 " src={img_top_text} />
      </div>
      }
      
      else if(width <= 640){
        return  <div className="mt-32 " >
        <img alt="a" className="w-96 " src={img_top_text} />
      </div>
      }else if(width <= 768){
        return  <div className="mt-32 " >
        <img alt="a" className="w-96 " src={img_top_text} />
      </div>
      }else if(width <= 1024){
        return  <div className="mt-32 " >
        <img alt="a" className="w-96 " src={img_top_text} />
      </div>
      }else if(width <= 1280){
        return  <div className="mt-32 " >
        <img alt="a" className="w-96 " src={img_top_text} />
      </div>
      }else if(width <= 1536){
        return  <div className="mt-32 " >
        <img alt="a" className="w-96 " src={img_top_text} />
      </div>
      }
      else
      {
        
        //짱큼
        return  <div>3xl</div>;
      }
    }

    const Middle=()=>{
      if(width <= 400){
        return   <div className="mt-10" >
        <img alt="a" className="w-40" src={img_middle_01} />
      </div>
      }
      
      else if(width <= 640){
        return   <div className="mt-20" >
        <img alt="a" className="w-52" src={img_middle_01} />
      </div>
      }else if(width <= 768){
        return   <div className="mt-20" >
        <img alt="a" className="w-52" src={img_middle_01} />
      </div>
      }else if(width <= 1024){
        return   <div className="mt-20" >
        <img alt="a" className="w-80" src={img_middle_01} />
      </div>
      }else if(width <= 1280){
        return   <div className="mt-20" >
        <img alt="a" className="w-52" src={img_middle_01} />
      </div>
      }else if(width <= 1536){
        return   <div className="mt-20" >
        <img alt="a" className="w-52" src={img_middle_01} />
      </div>
      }
      else
      {
        
        //짱큼
        return  <div>3xl</div>;
      }
    }

    const Bottom=()=>{
      if(width <= 400){
        return   <div className="mt-5" >
        <img alt="a" className="w-64" src={img_bottom_text} />
      </div>
      }
      
      else if(width <= 640){
        return  <div className="mt-5" >
        <img alt="a" className="w-72" src={img_bottom_text} />
      </div>
      }else if(width <= 768){
        return   <div className="mt-5" >
        <img alt="a" className="w-72" src={img_bottom_text} />
      </div>
      }else if(width <= 1024){
        return   <div className="mt-5" >
        <img alt="a" className="w-72" src={img_bottom_text} />
      </div>
      }else if(width <= 1280){
        return   <div className="mt-5" >
        <img alt="a" className="w-72" src={img_bottom_text} />
      </div>
      }else if(width <= 1536){
        return  <div className="mt-5" >
        <img alt="a" className="w-72" src={img_bottom_text} />
      </div>
      }
      else
      {
        
        //짱큼
        return  <div>3xl</div>;
      }
    }

    
    const StartButton=()=>{
      if(width <= 400){
        return    <div className="mt-16" >
        <img alt="a" className="w-64" src={img_btn}  />
      </div>
      }
      
      else if(width <= 640){
        return   <div className="mt-24" >
        <img alt="a" className="w-80" src={img_btn} />
      </div>
      }else if(width <= 768){
        return   <div className="mt-24" >
        <img alt="a" className="w-80" src={img_btn} />
      </div>
      }else if(width <= 1024){
        return    <div className="mt-24" >
        <img alt="a" className="w-80" src={img_btn} />
      </div>
      }else if(width <= 1280){
        return    <div className="mt-24" >
        <img alt="a" className="w-80" src={img_btn} />
      </div>
      }else if(width <= 1536){
        return   <div className="mt-24" >
        <img alt="a" className="w-80" src={img_btn} />
      </div>
      }
      else
      {
        
        //짱큼
        return  <div>3xl</div>;
      }
    }

    const CheckSize=()=>{
      if(width <= 400){
        return  <div>ssm</div>;
      }
      
      else if(width <= 640){
        return  <div>sm</div>;
      }else if(width <= 768){
        return  <div>md</div>;
      }else if(width <= 1024){
        return  <div>lg</div>;
      }else if(width <= 1280){
        return  <div>xl</div>;
      }else if(width <= 1536){
        return  <div>2xl</div>;
      }
      else
      {
        
        //짱큼
        return  <div>3xl</div>;
      }
    }


  return <div className={`w-screen h-full overflow-auto bg-[#4a4a4a] flex flex-col items-center touch-none  `} >
    <div className="absolute top-0 flex flex-col items-center justify-center w-screen text-red-700 bg-red-50 opacity-30" >
       {/* <div>{window.innerWidth}</div>
      <div>{window.screen.height}</div> 
      <div>{CheckSize()}</div>  */}
      </div>
      {Top()}
    {Middle()}
    {Bottom()}
    {StartButton()}
    
  </div>;
};

export default Test;

"use client"

import { FavoriteBorder, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function Card({titulo, nota}){
   const [favorito, setFavorito] = useState(false)
   
    return(
            
             <div className="flex flex-col items-center w-48 relative">
             
                {
                    favorito ?
                    <FavoriteIcon className='absolute top-2 right-2'/>
                    <FavoriteBorderIcon className='absolute top-2 right-2'/>
                }   
                 <img className="rounded" src="https://www.themoviedb.org/t/p/w220_and_h330_face/sPmmgdmApfjX9x2mg02bo0aUOU9.jpg" alt=""/>
                <span className="text-lg font-bold line-clamp-1">
                {titulo}
                </span>

        <div>
            <i></i>
            <span>{nota}</span>
        </div>
            <a href="" className="bg-amber-400 text-black w-full rounded py-1 text-center">detalhes</a>
            </div>
    )

}
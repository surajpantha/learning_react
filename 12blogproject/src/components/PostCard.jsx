import React from "react";
import appWriteService from "../appwrite/conf"
import { Link } from "react-router-dom";

export default function PostCard({$id,title,featuredImage}){
  

    return(
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={appWriteService.getFileView(featuredImage)} alt={title} />

            </div>
            <h2>{title}</h2>
        </div>
    </Link>
    )
}
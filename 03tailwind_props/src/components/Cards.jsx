import React from "react"

function Card(props){
    return(
        <>
         <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="https://cdn.londonandpartners.com/asset/lords-cricket-ground-and-lords-tour_lords-cricket-ground-photo-jed-leicester-image-courtesy-of-the-marylebone-cricket-club-mcc_76bca207c35df2046e533d96952eeffd.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        {props.name}
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that. <br />
         {props.someobj}
      </p>

     
    </div>
  </div>
</div>
        
        </>
    )
}
export default Card
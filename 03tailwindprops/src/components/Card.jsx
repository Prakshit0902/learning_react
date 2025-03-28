import React from "react"

// can pass props in the function 
function Card({myObj}) {
    let username,id,price
    if (myObj){
        username = myObj.username
        id = myObj.id
        price = myObj.price

    }

    console.log(myObj)
    
    return (
        <div class="flex justify-center items-center m-4">
            <div class="w-60 flex flex-col rounded-xl bg-black min-h-[19rem]">
                <div>
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                        alt="test"
                        className="object-cover object-center rounded-t-xl"
                    />
                </div>
                <div class="flex flex-col px-3 text-white">
                    <div class="flex justify-between">
                        <h1 class="font-bold">{username || 'no-name'}</h1>
                        <h1>Price</h1>
                    </div>
                    <div class="flex justify-between">
                        <p>{id || 'no-id'}</p>
                        <p>{price || 'no-price'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
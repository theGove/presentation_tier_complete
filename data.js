const gas_end_point="ENTER YOUR GOOGLE APPS SCRIPT ENDPOINT HERE"

async function customers_from_astra(){
    const payload={
        keyspace: "doterra",
        table: "customer",
        key: "fc/fc00ffc6-4850-49bf-8121-486795569fd3"
    }
    const reply = await fetch(gas_end_point + "?mode=astra", { 
        method: "POST", 
        body: JSON.stringify(payload),
    })

    const response = await reply.text()
    document.getElementById("output").innerHTML=response
}

async function products_from_firestore(){
    console.log(1)
    const payload={
        collection: "product",
    }

    const reply = await fetch(gas_end_point + "?mode=firestore", { 
        method: "POST", 
        body: JSON.stringify(payload),
    })

    const response = await reply.text()
    console.log(JSON.parse(response))
    document.getElementById("output").innerHTML=response
}
export function TeamA({team, bans, name}) {
    return (
        <>
            <div id={name}>
                {team.map((team, index)=>{
                return(
                    <div key={`${name}${index}`} className="player_container">
                        <div className="img_container my-2">
                            <img src={team.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : team.image} alt="..."/>
                        </div>
                        <span>{team.name === undefined ? "Player"+(index+1) : team.name}</span>
                    </div>
                )
                })}
                <div id={`bans_${name}`}>
                    <h1 className="container_title"> ❌ Bans</h1>
                    <div className="bans_container">
                    {bans.map((bans, index)=>{
                        console.log(bans)
                        return(
                                <div key={`${name}${index}`} className="img_container">
                                    <img src={bans.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : bans.image} alt="..."/>
                                </div>
                        )
                    })} 
                    </div>
                </div>
            </div>
        </>
    )
}
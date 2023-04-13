import { useStateContext } from "../context/StateContext";
import { PickImageGod } from "../functions/PickImageGod";

export function Gods({godsArray}) {

    const { test, commands, god, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB } = useStateContext();

    return (
        <>
            <div id="gods" className='bg-dark col'>
                {godsArray.map((god)=>{
                return(
                    <div className='gods_wrapper' onClick={()=>{
                            PickImageGod(god, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB);
                        }}>
                        <span>{god.name}</span>
                        <div className="img_wrapper relative">
                            <img src={god.image} alt={god.name} />
                            {god.banished === true ? <div className="banished"><span> ❌ </span></div> : null}
                        </div>
                    </div>   
                )
                })}
            </div>
        </>
    )
}
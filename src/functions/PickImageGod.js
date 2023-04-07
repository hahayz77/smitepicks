export function PickImageGod(god, setGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB){
    setGod(god);
    if(commandIndex === 1) setBansA([god, {}])
    if(commandIndex === 2) setBansB([god, {}])
    if(commandIndex === 3) setTeamA([god, {}])
    if(commandIndex === 4) setTeamB([god, {}])
    if(commandIndex === 5) setBansA([bansA[0], god])
    if(commandIndex === 6) setBansB([bansB[0], god])
    if(commandIndex === 7) setTeamA([teamA[0], god])
    if(commandIndex === 8) setTeamB([teamB[0], god])



    // setTeamA([teamA[0], god]);
}
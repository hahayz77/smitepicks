export function PickImageGod(selectedGod, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB){
    setSelectedGod(selectedGod);
    if(commandIndex === 1) setBansA([selectedGod, {}])
    if(commandIndex === 2) setBansB([selectedGod, {}])
    if(commandIndex === 3) setTeamA([selectedGod, {}])
    if(commandIndex === 4) setTeamB([selectedGod, {}])
    if(commandIndex === 5) setBansA([bansA[0], selectedGod])
    if(commandIndex === 6) setBansB([bansB[0], selectedGod])
    if(commandIndex === 7) setTeamA([teamA[0], selectedGod])
    if(commandIndex === 8) setTeamB([teamB[0], selectedGod])
}
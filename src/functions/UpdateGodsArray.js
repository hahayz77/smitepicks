export function UpdateGodsArray(selectedGod, godsArray, setGodsArray, commandIndex, updateGod){

    updateGod = godsArray.find(god => god.name === selectedGod.name);
    

    if(commandIndex === 1) {updateGod.banished = true;}
    if(commandIndex === 2) {updateGod.banished = true;}
    if(commandIndex === 5) {updateGod.banished = true;}
    if(commandIndex === 6) {updateGod.banished = true;}

    
    setGodsArray(godsArray,...[updateGod]);
    // console.log("update gods array")
}
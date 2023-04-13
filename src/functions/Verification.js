export function Verification(selectedGod, commandIndex, godsArray, teamA, teamB, bansA, bansB, lastCommand){

    if(!selectedGod) { // no selected God
        alert("You should select a God!");
        return false;
    }

    if(selectedGod.banished === true){ // if the selected god is banished
        alert("This god was banished");
        return false;
    }

    // console.log(god, commandIndex, setPass, allBans, setAllBans, pastBans, setPastBans, bansA, bansB);
    // console.log("###########################")
    return true; // if is all ok
}
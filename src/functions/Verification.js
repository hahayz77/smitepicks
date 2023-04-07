export async function Verification(god, gods, setGods, commandIndex, setPass, allBans, setAllBans, pastBans, setPastBans, bansA, bansB, findBan, godBanished){
    console.log(god, commandIndex, setPass, allBans, setAllBans, pastBans, setPastBans, bansA, bansB);
    findBan = gods?.find(gods => gods.name === god.name);
    if(findBan.banished === true) {
        setPass(false); 
    } else {
        setPastBans([...bansA, ...bansB]);
        setPass(true);
    }
    // if(commandIndex === 6) testPicksA.find(e => e.name === godSelected.name);
    // if(commandIndex === 7) testPicksB.find(e => e.name === godSelected.name);
    console.log(god, commandIndex, setPass, allBans, setAllBans, pastBans, setPastBans, bansA, bansB);
    console.log("###########################")
}
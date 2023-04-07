export function Verification(god, commandIndex, allBans, setPass, setAllBans, bansA, bansB, testBans){
    testBans = undefined;
    testBans = allBans?.find(e => e.name === god.name);
    // if(commandIndex === 6) testPicksA.find(e => e.name === godSelected.name);
    // if(commandIndex === 7) testPicksB.find(e => e.name === godSelected.name);
    if(testBans) setPass(false);
    setAllBans([...bansA, ...bansB]);
}
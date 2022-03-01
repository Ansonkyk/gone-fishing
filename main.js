function randomfish(){
    let fish=['sea bass', 'European sea bass', 'hybrid striped bass', 'bream', 'cod', 'drum', 'haddock', 'hoki', 'Alaska pollock', 'rockfish', 'pink salmon', 'snapper', 'tilapia', 'turbot', 'walleye', 'lake whitefish','Barracuda', 'Chilean sea bass', 'cobia', 'croaker', 'eel', 'marlin', 'mullet', 'salmon', 'bluefin tuna',
    'golden doubloon'];
    let max=fish.length;
    return fish[Math.floor(Math.random() * max)];

}

function randomweight(){
     let max=3.5;
     return Math.random()*max;
}

function randomcolor(){
    let color=['black','red','green','yellow','blue','magenta','cyan','white','grey'];
    let max=color.length;
    return color[Math.floor(Math.random() * max)];
}

function randomtime(){
    let max=75;

    return 15+Math.floor(Math.random() * max);
}

function chum(chumed){
    if (chumed){return randomtime()-10;
    }else{return randomtime();}
}
function newfish(){
    let w=randomweight();
    let r=randomfish();
    if (r=='golden doubloon'){
        let object={name:r, weight:w ,worth:w*(1000+2*Math.random())};
        console.log('It is Golden Doubloon!!!!!!!')
        return object;
}else{
    let object={name:randomcolor()+' '+r, weight:w ,worth:w*(4+2*Math.random())};
    return object;
}

    
    
}

let time=0;

let hour=5;
let minute=0;
let fishcaught=[];
let sumoffish=0;
let sumofweight=0;
let sumofvalue=0;


const prompt=require('prompt-sync')();



console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");
console.log('==========================================');
console.log('The Time is 4:00am. Your boat just arrive the fishing spot?');
console.log('Chum to make fishing bit faster, It take 30 mins .We use live bait so it is now or never!')
chumed=prompt('Do you want to chum the water? Type 1 for yes, 0 for no');
if (chumed==1){
    chumed=true;
    console.log('Water chumed');
    time+=30;
}else{
    chumed=false;
    console.log('Trusting your Luck? Great!');
}
console.log('You started fishing with a big swing');
time+=chum(chumed);

while (time<360){
    console.log('==========================================');
    hour=4+Math.floor(time/60);
    minute=time%60;
    sumoffish=fishcaught.length;

    console.log(`The time is ${hour}:${minute}am. So far you've caught:`);
    console.log(sumoffish+' Fish,  '+sumofweight+' Weight,  $'+sumofvalue);
    fishcaught.push(newfish(chumed));
    sumofweight+=fishcaught[fishcaught.length-1].weight;
    sumofvalue+=fishcaught[fishcaught.length-1].worth;
    console.log('You caught a '+fishcaught[fishcaught.length-1].name+' weighing'+fishcaught[fishcaught.length-1].weight+'lbs and valued at $'+
    fishcaught[fishcaught.length-1].worth);
    if (sumofweight>10){
        var action='r';
        console.log('This fish would put you over 10 lbs, so you release something.')
    }else{
        var action=prompt('Your action: [c]atch or [r]elease?');
    }
    while (action=='r' && fishcaught.length>0){
        i=0;
        console.log('You have '+fishcaught.length+' fish.Please choose one to release');
        while(fishcaught[i]){
            console.log(i+') '+fishcaught[i].name+', '+fishcaught[i].weight+', $'+fishcaught[i].worth);
            i+=1;

        }
        var drop=prompt("Which fish you would like to release?");
        sumofweight-=fishcaught[drop].weight;
        sumofvalue-=fishcaught[drop].worth;
        console.log(fishcaught[drop].name+"released");
        fishcaught.splice(drop, 1); 
        if (fishcaught.length>0){
            console.log('Keep releasing?');
            action=prompt('Type r to keep release, anyother char otherwiese');
        }

    }
        console.log('All fish you caught swimming in your tank');
    
    
    time+=chum(chumed);
    console.log('==========================================');

}
console.log('Times up!')
i=0;
console.log('You have '+fishcaught.length+' fish.');
while(fishcaught[i]){
  console.log(i+') '+fishcaught[i].name+', '+fishcaught[i].weight+', $'+fishcaught[i].worth)
  i+=1;
}
console.log('Total weight: '+sumofweight+' lbs')
console.log('Total value: $'+sumofvalue)
console.log('Thank you for playing, by Anson')

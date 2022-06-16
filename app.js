const pages = {
    home: document.getElementById('home'),
    profile: document.getElementById('profile'),
    education: document.getElementById('education'),
    awardshonors: document.getElementById('awards+honors'),
    skills: document.getElementById('skills'),
    projects: document.getElementById('projects'),
}

let hash = window.location.hash.split('#')[1];
if(hash == undefined){
    console.log('nah')
    hash = 'home'
}
console.log(hash)
document.getElementById(hash).classList.add('active');
if(hash == 'skills'){
    skills()
}else if(hash == 'education'){
    education()
}else if(hash == 'awards+honors'){
    awards()
}else if(hash == 'projects'){
    projects()
}else if(hash == 'profile'){
    profile()
}else if(hash == 'home'){
    home()
}else if(hash=='work'){
    work()
}
let cr = (x)=>{
    console.log(hash)
    x.style.backgroundColor = '#ee9aec'
    if(x.id == 'skills'){
        skills()
    }else if(x.id == 'education'){
        education()
    }else if(x.id == 'awards+honors'){
        awards()
    }else if(x.id == 'projects'){
        projects()
    }else if(x.id == 'profile'){
        profile()
    }else if(x.id == 'home'){
        home()
    }else if(x.id=='work'){
        work()
    }

    document.getElementById(hash).style.backgroundColor = '#333333'
    if(hash == 'home' ){
        console.log('remove class from home')
        document.getElementById('home').classList.remove('active');
    }else if(hash == 'profile' ){
        console.log('remove class from profile')
        document.getElementById('profile').classList.remove('active');
    }else if(hash == 'education' ){
        console.log('remove class from education')
        document.getElementById('education').classList.remove('active');
    }else if(hash == 'awards+honors' ){
        console.log('remove class from awards+honors')
        document.getElementById('awards+honors').classList.remove('active');
    }else   if(hash == 'skills' ){
        console.log('remove class from skills')
        document.getElementById('skills').classList.remove('active');
    }else if(hash == 'projects' ){
        console.log('remove class from projects')
        document.getElementById('projects').classList.remove('active');
    }
    hash = x.id;
    console.log(x.id)
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}


function skills(){
    console.log('e')
    // window.scrollBy(0,findPos(document.getElementById("sk")));
    document.getElementById('sk').scrollIntoView({behavior: 'smooth'});
}

function education(){
    window.scrollBy(0,findPos(document.getElementById("ed")));
}

function awards(){
    window.scrollBy(0,findPos(document.getElementById("aw")));
}

function projects(){
    window.scrollBy(0,findPos(document.getElementById("pr")));
}

function profile(){
    window.scrollBy(0,findPos(document.getElementById("prf")));
}

function home(){
    window.scrollBy(0,findPos(document.getElementById("h")));
}

function work(){
    window.scrollBy(0,findPos(document.getElementById("w")));
}
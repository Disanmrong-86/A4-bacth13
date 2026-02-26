// let interviewList = [];
// let rejectList = [];
let currentStatus = 'all';
const tabActive = ["bg-blue-700","border-blue-800","text-white"];
const tabInactive = ["bg-transparent","text-black","border-black"]


let totalCount = document.getElementById('total-count')
let jobCount = document.getElementById('job-count')
let interviewCount = document.getElementById('interview-count')
let rejectCount = document.getElementById('reject-count')


const mainSection = document.querySelector('main');
const cardSection = document.getElementById('allCards');

const filterSection = document.getElementById('filter-section')


// const allFilterBtn = document.getElementById('all-filter-btn');
// const interviewFilterBtn = document.getElementById('interview-filter-btn');
// const rejectFilterBtn = document.getElementById('reject-filter-btn');


function calculation(){
    totalCount.innerText = cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
    jobCount.innerText = totalCount.innerText ;  
}
calculation()
 

function btnSwap(tab) {
     const tabs = ['all','interview','reject']

     for(const t of tabs){
       const tabName =  document.getElementById("tab-" + t)
       if(t === tab){
        tabName.classList.add( ... tabActive)
        tabName.classList.remove( ... tabInactive)
       }
       else{
        tabName.classList.add( ... tabInactive);
        tabName.classList.remove ( ... tabActive)
       }
     }
}
btnSwap(currentStatus)
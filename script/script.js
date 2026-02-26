let currentStatus = "all";
const tabActive = ["bg-blue-700","border-blue-800","text-white"];
const tabInactive = ["bg-transparent","text-black","border-black"]

let totalCount = document.getElementById('total-count')
let interviewCount = document.getElementById('interview-count')
let rejectCount = document.getElementById('reject-count')
const available = document.getElementById('job-count')


const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectContainer = document.getElementById('rejected-container')
const emptyState = document.getElementById('filter-section');


 

function btnSwap(tab) {
     const tabs = ['all','interview','reject']
    currentStatus = tab;
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

     const pages = [allContainer,interviewContainer,rejectContainer];
     for(const section of pages){
        section.classList.add('hidden')
     }


emptyState.classList.add('hidden')

     if(tab === 'all'){
        allContainer.classList.remove('hidden')
        if(allContainer.children.length < 1){
            emptyState.classList.remove('hidden')
        }
     }
     else if (tab === 'interview'){
        interviewContainer.classList.remove('hidden')
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove('hidden')
        }
     }
     else{
        rejectContainer.classList.remove('hidden')
        if(rejectContainer.children.length < 1){
            emptyState.classList.remove('hidden')
        }
     }
     updateState();
}
btnSwap(currentStatus);

totalCount.innerText = allContainer.children.length;
// interviewCount.innerText = interviewContainer.children.length

document.getElementById('jobs-container').addEventListener('click',function (event){
    const clickedElement = event.target;
    const card = clickedElement.closest('.card');
    const status = card.querySelector('.status');
    const parent = card.parentNode;
    console.log(card)
    
    if(clickedElement.classList.contains('interview')){
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
     
    }
    if(clickedElement.classList.contains('reject')){
        status.innerText = "Rejected";
        rejectContainer.appendChild(card);
      
    }
    if(clickedElement.classList.contains('delete')){
        parent.removeChild(card)
    }
    updateState();
})


function updateState(){
    // totalCount.innerText = allContainer.children.length
    // interviewCount.innerText = interviewContainer.children.length
    // rejectCount.innerText = rejectContainer.children.length


    const counts = {
        all: allContainer.children.length ,
        interview :interviewContainer.children.length,
        reject :rejectContainer.children.length
    };
    totalCount.innerText = counts.all;
    interviewCount.innerText= counts.interview;
    rejectCount.innerText = counts.reject;

    available.innerText = counts[currentStatus];

    if(counts[currentStatus] < 1){
        emptyState.classList.remove('hidden')
    }else{
        emptyState.classList.add('hidden')
    }
}
updateState();
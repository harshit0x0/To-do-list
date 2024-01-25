const addtaskBtn = document.querySelector('#newtaskbtn');
const myform = document.querySelector(".newtask");
const box2 = document.querySelector('.box2');
const input = document.querySelector('#input')
const list = document.querySelector('ul');

addtaskBtn.addEventListener('click',function(){
    console.log("newtaskbtn clicked!");
    box2.classList.add('expand'); val=1;      
})

//comment box
function togglecomment(){
    console.log("toggle called, length= " + document.querySelectorAll('li').length);
    if(document.querySelectorAll('li').length==0){
        document.querySelector('.comment').classList.remove('hide');
    }
    else{
        document.querySelector('.comment').classList.add('hide');
    }    
}

//adding new tasks
{
myform.addEventListener('submit',function(e){
    e.preventDefault();

    const inputVal = input.value;
    let item = document.createElement("li");
    let node = document.createTextNode('');
    item.appendChild(node);
    item.innerHTML = `<div class="progress">
    <div class="progressbtn"></div>
    <svg class="tick ptick" xmlns="http://www.w3.org/2000/svg" width="92" height="59" viewBox="0 0 92 59" fill="none">
        <g filter="url(#filter0_d_2_62)">
            <path d="M81.8868 2.1957C81.8868 2.1957 78.9829 1.24642 77.3756 1.05857C75.7682 0.870722 74.1178 0.88511 72.519 1.10092C70.9202 1.31673 69.4042 1.72972 68.0577 2.31628C66.7112 2.90283 65.5607 3.65145 64.6719 4.51932L38.7841 29.76L26.4957 20.8497C25.4316 20.0504 24.1263 19.3933 22.6562 18.9166C21.186 18.4399 19.5803 18.1532 17.9328 18.0732C16.2853 17.9931 14.6289 18.1214 13.0604 18.4506C11.4919 18.7797 10.0426 19.303 8.79715 19.9901C7.55166 20.6771 6.53492 21.5141 5.80624 22.4522C5.07757 23.3903 4.65155 24.4107 4.55306 25.4538C4.45456 26.497 4.68556 27.5421 5.23256 28.528C5.77956 29.514 6.63163 30.4211 7.73903 31.1964L30.8702 47.9688C33.0556 49.5577 36.1332 50.5106 39.3984 50.6511L41.1264 50.6466C43.0476 50.5602 44.911 50.1929 46.5699 49.5737C48.2288 48.9546 49.638 48.1004 50.6865 47.0784L85.5483 13.0815C86.4382 12.2144 87.0495 11.245 87.3471 10.2287C87.6448 9.21235 87.6229 8.16897 87.2829 7.15812C86.9429 6.14728 86.2914 5.18876 85.3655 4.3373C84.4396 3.48584 83.2575 2.75812 81.8868 2.1957Z" fill="black"/>
        </g>
        <defs>
            <filter id="filter0_d_2_62" x="0.530945" y="0.927612" width="91.0243" height="57.7235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_62"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_62" result="shape"/>
      </filter>
    </defs>
  </svg>
<svg class="ongoing" xmlns="http://www.w3.org/2000/svg" width="87" height="168" viewBox="0 0 87 168" fill="none">
    <g filter="url(#filter0_d_2_63)">
        <path d="M10.875 81.375C10.875 79.2864 11.3047 77.2834 12.0695 75.8065C12.8343 74.3297 13.8715 73.5 14.9531 73.5H69.3281C70.4097 73.5 71.447 74.3297 72.2118 75.8065C72.9766 77.2834 73.4062 79.2864 73.4062 81.375C73.4062 83.4636 72.9766 85.4666 72.2118 86.9435C71.447 88.4203 70.4097 89.25 69.3281 89.25H14.9531C13.8715 89.25 12.8343 88.4203 12.0695 86.9435C11.3047 85.4666 10.875 83.4636 10.875 81.375Z" fill="black"/>
    </g>
    <defs>
        <filter id="filter0_d_2_63" x="-4" y="0" width="95" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_63"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_63" result="shape"/>
        </filter>
    </defs>
</svg>
</div>
<div class="task unselectable">Water the plants</div>
<form class="edittask" action=""> <input id='editinput' type="text" placeholder="">
<svg class="edit"  xmlns="http://www.w3.org/2000/svg" width="77" height="55" viewBox="0 0 77 55" fill="none">
<path d="M75.7489 12.3504C77.417 11.1589 77.417 9.17303 75.7489 8.04263L65.7403 0.893626C64.1578 -0.297875 61.3776 -0.297875 59.7095 0.893626L51.8395 6.48452L67.8789 17.9413M0 43.5433V55H16.0394L63.3451 21.1797L47.3057 9.72295L0 43.5433Z" fill="#314DAE"/>
</svg>
<button type="submit" id="submit">
<svg class="tick" xmlns="http://www.w3.org/2000/svg" width="92" height="59" viewBox="0 0 92 59" fill="none">
    <g filter="url(#filter0_d_2_62)">
        <path d="M81.8868 2.1957C81.8868 2.1957 78.9829 1.24642 77.3756 1.05857C75.7682 0.870722 74.1178 0.88511 72.519 1.10092C70.9202 1.31673 69.4042 1.72972 68.0577 2.31628C66.7112 2.90283 65.5607 3.65145 64.6719 4.51932L38.7841 29.76L26.4957 20.8497C25.4316 20.0504 24.1263 19.3933 22.6562 18.9166C21.186 18.4399 19.5803 18.1532 17.9328 18.0732C16.2853 17.9931 14.6289 18.1214 13.0604 18.4506C11.4919 18.7797 10.0426 19.303 8.79715 19.9901C7.55166 20.6771 6.53492 21.5141 5.80624 22.4522C5.07757 23.3903 4.65155 24.4107 4.55306 25.4538C4.45456 26.497 4.68556 27.5421 5.23256 28.528C5.77956 29.514 6.63163 30.4211 7.73903 31.1964L30.8702 47.9688C33.0556 49.5577 36.1332 50.5106 39.3984 50.6511L41.1264 50.6466C43.0476 50.5602 44.911 50.1929 46.5699 49.5737C48.2288 48.9546 49.638 48.1004 50.6865 47.0784L85.5483 13.0815C86.4382 12.2144 87.0495 11.245 87.3471 10.2287C87.6448 9.21235 87.6229 8.16897 87.2829 7.15812C86.9429 6.14728 86.2914 5.18876 85.3655 4.3373C84.4396 3.48584 83.2575 2.75812 81.8868 2.1957Z" fill="white"/>
    </g>
    <defs>
        <filter id="filter0_d_2_62" x="0.530945" y="0.927612" width="91.0243" height="57.7235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_62"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_62" result="shape"/>
        </filter>
    </defs>
  </svg>
</button></form>
<svg class="delete" xmlns="http://www.w3.org/2000/svg" width="103" height="69" viewBox="0 0 103 69" fill="none">
<path d="M25.75 54.625C25.75 57.7875 29.6125 60.375 34.3333 60.375H68.6666C73.3875 60.375 77.25 57.7875 77.25 54.625V20.125H25.75V54.625ZM81.5416 11.5H66.5208L62.2291 8.625H40.7708L36.4791 11.5H21.4583V17.25H81.5416V11.5Z" fill="#B60000"/>
</svg>`;

    item.querySelector('.edit').addEventListener('click', function () {
        item.classList.add('hideEdit');
        item.querySelector('#editinput').value=item.querySelector(".task").innerText;
    });

    // Add event listener for the edit form in this new task item
    item.querySelector('.edittask').addEventListener('submit', function (e) {
        console.log("submit clicked!");
        e.preventDefault();
        item.querySelector(".task").innerText = item.querySelector('#editinput').value;
        item.classList.remove('hideEdit');
    });

    // Add event listener for the delete button in this new task item
    item.querySelector('.delete').addEventListener('click', function () {
        item.remove();
        togglecomment();
    });

    //adding event listener for progress tracking
    const progressbtn = item.querySelector('.progressbtn');
    const ongoingbtn = item.querySelector('.ongoing');
    const tickbtn = item.querySelector('.ptick');

    
        ongoingbtn.addEventListener('click',function(){
            console.log('ongoing button clicked');
            ongoingbtn.style.display =  'none';
            tickbtn.style.display = 'none';
            progressbtn.style.pointerEvents = 'visiblePainted';
        });
        tickbtn.addEventListener('click',function(){
            console.log('tick button clicked');
            ongoingbtn.style.display =  'inline-block';
            tickbtn.style.display = 'none';
        });
        progressbtn.addEventListener('click',function(){
                progressbtn.style.pointerEvents = 'none';
                console.log('progress button clicked');
                ongoingbtn.style.display =  'none';
                tickbtn.style.display = 'inline-block';
        });
    
    //appending
    item.querySelector('.task').innerText= inputVal;
    list.appendChild(item);

    input.value = '';
    console.log("submit clicked");
    box2.classList.remove('expand');
    togglecomment();
})
}

//editing tasks
{
const editforms = document.querySelectorAll(".edittask");
const editbtn = document.querySelectorAll('.edit');
const lists = document.querySelectorAll('li');

for(let i=0; i<editbtn.length; i++){
    editbtn[i].addEventListener('click',function(){
        lists[i].classList.add('hideEdit');
    })
    lists[i].querySelector('input').value= lists[i].querySelector('.task').innerText;
}

const tasks = document.querySelector(".tasks");

for(let i=0; i<editforms.length; i++){
    editforms[i].addEventListener('submit',function(e){
        console.log("submit clicked!");
        e.preventDefault();
        lists[i].querySelector(".task").innerText = editforms[i].querySelector('#editinput').value;
        lists[i].classList.remove('hideEdit');
    })
}
}

//deleting tasks
{
const lists = document.querySelectorAll('li');
const deletebtn = document.querySelectorAll(".delete");
for(let i=0; i<deletebtn.length; i++){
    deletebtn[i].addEventListener('click',function(){
        lists[i].remove();
        togglecomment();
    })
}
}
const progressbtn = document.querySelectorAll('.progressbtn');
const ongoingbtn = document.querySelectorAll('.ongoing');
const tickbtn = document.querySelectorAll('.ptick');

for(let i=0; i<ongoingbtn.length; i++){
    ongoingbtn[i].addEventListener('click',function(){
        console.log('ongoing button clicked');
        ongoingbtn[i].style.display =  'none';
        tickbtn[i].style.display = 'none';
        progressbtn[i].style.pointerEvents = 'visiblePainted';
    });
    tickbtn[i].addEventListener('click',function(){
        console.log('tick button clicked');
        ongoingbtn[i].style.display =  'inline-block';
        tickbtn[i].style.display = 'none';
    });
    progressbtn[i].addEventListener('click',function(){
            progressbtn[i].style.pointerEvents = 'none';
            console.log('progress button clicked');
            ongoingbtn[i].style.display =  'none';
            tickbtn[i].style.display = 'inline-block';
    });
}

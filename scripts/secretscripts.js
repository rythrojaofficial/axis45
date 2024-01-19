let memberListArray  = ['zack snider,1','ryan johnson',					
    'Shawn Canonizado'  ,										
    'Scott Jarvis,1'	    ,				
    'Slava bboy,1'	    ,				
    'Kevin Semple Bboy'	,				
    'Justin Won,1'		,			
    'Ricky Thonglyvong,1'	,				
    'Daniel Yang BBoy,2'	,				
    'Dylan Yung bboy,1'	,				
    'di li,1'				,	
    'Michael Ko,1'		,								
    'Grey geppert'		,			
    'Jonah Mitchell,1'	,				
    'Julian Lee'		,			
    'Aslan' 			,		
    'Grace Lao,1'			,							
    'Lex Friedman,1'		,								
    'Merv,1'				,					
    'Jeremy Denny'		,			
    'Caleb Pierce,1'		,			
    'Joey Mushroom,1'		,			
    'Jake Gallow,2'		,			
    'Blake Dukowitz,1'
];

// async function load() {
//     const response = await fetch(
//         "https://script.google.com/a/macros/mercenarytricking.com/s/AKfycbyFhw9xdsxrPbavncgFsVK_J6G2r5y-JSiOB0vEjLbObOHxOQA2Acezp-X6vHc75YDk/exec"
//     )
//     const events = await response.json();
//     console.log({events});
// }
// load()
let membersOptions = document.getElementById('members');
let memberLibrary = [];
memberListArray.forEach((memberCommaMembership)=>{
    let member;
    let membership;
    if (memberCommaMembership.includes(',')){
        member = memberCommaMembership.slice(0, memberCommaMembership.indexOf(','));
        membership = memberCommaMembership.slice(-1);
    }else {
        member = memberCommaMembership;
        membership = 0
    }

    
    let newMember = createMember(member, membership);
    memberLibrary.push(newMember);
    populateOptions(member);
});


// membership is 0, 1, 2, 3 in memberOptions
function createMember(fullName, membership){
    let memberOptions = ['not a member',
                        'tricking member',
                        'breaking member',
                        'access member'];
    if (!membership){membership = 0};
    let membershipStatus = memberOptions[membership];
    




    function changeMembership(adjustedMembership){membershipStatus = memberOptions[adjustedMembership]}
    function getName(){return fullName}
    function getMembershipStatus(){return membershipStatus}

    return{
        getName, getMembershipStatus, changeMembership
    }
}

function populateOptions(memberName){
    let anOption = document.createElement('option');
        anOption.value = memberName;
        anOption.innerText = memberName;
        membersOptions.appendChild(anOption);
    

}








// let selectOptions = Array.from(document.querySelectorAll('option'));
// selectOptions.forEach((element)=>{
//     element.value = element.innerText;
// })
let theCheckboxOptions = document.getElementById('checkbox-options');
let checkboxOptions = [
    'tricking session'  ,
    'exercise'  ,
    'breaking session'  ,
    'stretch'   ,
    'open session'
]

checkboxOptions.forEach((option)=>{
    let wrapper = document.createElement('div');

    let newCheck = document.createElement('input');
        newCheck.type = 'checkbox';
        newCheck.name = option;
        newCheck.value = option;

    let newCheckLabel = document.createElement('label');
        newCheckLabel.for = option;
        newCheckLabel.innerText = option;

    wrapper.appendChild(newCheck);
    wrapper.appendChild(newCheckLabel);

    theCheckboxOptions.appendChild(wrapper)

})

function populateCheckbox(){

}


const terminated_1 = document.getElementById('option1');
const terminated_2 = document.getElementById('option2');
const explain = document.getElementById('explain');
const exlain_div = document.getElementById('explain_Container');

/*HamburgerMenu*/
const menu = document.querySelector('.movil_Ul');
const hamburger = document.querySelector('.hamburger__Menu-container');

var radios = document.querySelectorAll('input[name="options"]');
var different_Names = document.querySelectorAll('input[name="different"]');
var bonded = document.querySelectorAll('input[name="bonded"]');
var convicted_radio = document.querySelectorAll('input[name="convicted"]');

const name_1 = document.getElementById('different1');
const name_different_Input = document.getElementById('different_explain');

const convicted1 = document.getElementById('convicted1');
const convicted_div = document.getElementById('personal__Form-convicted');

const bonded_1 = document.getElementById('bonded1');
const bonded_explain = document.getElementById('bonded_explain');

/*Buttons Offense */
const add_Offense = document.getElementById('add_Offense');
const personal__Offenses = document.querySelectorAll('input[name="offense"]')
const card = document.getElementById('show_Offense_Card');
const personal__Name = document.querySelector('.personal__Name');
const update_Offense = document.getElementById('update_Offense');


/*Skills */

const skills_words = [
    "Lawyer", "Mechanics", "Paralegal", "Programmer", "Profesor","Secretary"
];

const skill = document.getElementById('skill');
const overlay = document.getElementById('overlay');
const add_Skill = document.getElementById('add_Skill');
const skill_div = document.querySelector('.personal__Form-skill');

/*Trainer*/

const trainer_words = [
    "Cibersecurity", "Writing", "Computer Science", "Schedulling", "Typing","MPM"
];

const trainer = document.getElementById('trainer');
const trainer_overlay = document.getElementById('trainer_overlay');
const add_Trainer = document.getElementById('add_Trainer');
const trainer_div = document.querySelector('.personal__Form-trainer');

/*Language */

const language_words = [
    "English", "Spanish", "Creole", "French", "Dusth","Italian"
];

const language = document.getElementById('language');
const language_overlay = document.getElementById('language_overlay');
const writting = document.getElementById('writting');
const reading = document.getElementById('reading');
const speaking = document.getElementById('speaking');
const add_Language = document.getElementById('add_Language');
const language_div = document.querySelector('.show_Language_Card');


let globalInputValues = [];
let globalInputSkills = [];
let globalInputTrainer = [];
let globalInputLanguage = [];
let offenseBeingEditedId = null;

let toggleInput = () => {
    var option_1 = terminated_1.checked;

    if (!option_1) {
        
        explain.style.maxHeight = '0';
        setTimeout(() => {
            explain.style.display = 'none';
        }, 1000);
        
        return;
    }
    explain.style.display = 'flex';
    explain.style.maxHeight = `${explain.scrollHeight + 44}px`;

};

radios.forEach((radio) => {

    radio.addEventListener('change', toggleInput)

});

let toggleInputDifferent_Name = () => {
    var option_1 = name_1.checked;

    if (!option_1) {
        
        name_different_Input.style.maxHeight = '0';
        setTimeout(() => {
            name_different_Input.style.display = 'none';
        }, 1000);
        
        return;
    }
    name_different_Input.style.display = 'flex';
    name_different_Input.style.maxHeight = `${name_different_Input.scrollHeight + 44}px`;

};

different_Names.forEach((radio) => {

    radio.addEventListener('change', toggleInputDifferent_Name)

});

let toggleConvictions = () => {
    var option_1 = convicted1.checked;

    if (!option_1) {
        
        convicted_div.style.maxHeight = '0';
        convicted_div.style.opacity = '0';
        convicted_div.style.visibility = 'hidden';
        setTimeout(() => {
            convicted_div.style.display = 'none';
        }, 500);
        
        return;
    }
    convicted_div.style.display = 'grid';
    convicted_div.style.visibility = 'hidden';
    convicted_div.style.maxHeight = `${convicted_div.scrollHeight}px`;
    setTimeout(() => {
        convicted_div.style.opacity = '1';
        convicted_div.style.visibility = 'visible';
    }, 500);

};

convicted_radio.forEach((radio) => {

    radio.addEventListener('change', toggleConvictions)

});


/*Bonded*/

let toggleBonded = () => {
    var option_1 = bonded_1.checked;

    if (!option_1) {
        
        bonded_explain.style.maxHeight = '0';
        setTimeout(() => {
            bonded_explain.style.display = 'none';
        }, 1000);
        
        return;
    }
    bonded_explain.style.display = 'flex';
    bonded_explain.style.maxHeight = `${bonded_explain.scrollHeight + 44}px`;

};

bonded.forEach((radio) => {

    radio.addEventListener('change', toggleBonded)

});

add_Offense.addEventListener('click', () => {

    let offenseValues = Array.from(personal__Offenses).map(input => input.value);
    let hasSomeEmptyValue = offenseValues.some(value => value === '' || value === null || value === undefined);
    if (hasSomeEmptyValue) {
        console.log('some values are empty');
        return;
    }

    const show_Offense_Card = document.querySelector('.show_Offense_Card');

    let offenseItem = document.createElement('div');
    offenseItem.className = 'card'; 
    offenseItem.dataset.id = Date.now();

    let offenseData = document.createElement('div');


    let inputValues = [];
    personal__Offenses.forEach(input => {
        let p = document.createElement('p');
        p.textContent = input.value;

        offenseData.appendChild(p);
        offenseItem.appendChild(offenseData);

        inputValues.push(input.value);
        input.value = '';
    });

    const offenseId = offenseItem.dataset.id;
    let newCard = new OffenseCard(inputValues,offenseId);
    globalInputValues.push(newCard);

    let offenseButton = document.createElement('div');
    offenseButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    let update = document.createElement('i');
    update.className = 'fa-solid fa-pen fa-2x';

    button.addEventListener('click', () => {
        show_Offense_Card.removeChild(offenseItem);
        globalInputValues = globalInputValues.filter(card => card.id !== offenseId);
        console.log(globalInputValues);
    });

    update.addEventListener('click', () => {
        fillInputs(inputValues);
        update_Offense.style.display = 'block';
        add_Offense.style.display = 'none';

        offenseBeingEditedId = offenseId;
    });


    offenseButton.appendChild(button);
    offenseButton.appendChild(update);
    offenseItem.appendChild(offenseButton);
    show_Offense_Card.appendChild(offenseItem);

    

    const totalHeight = convicted_div.scrollHeight + show_Offense_Card.scrollHeight;
    convicted_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalInputValues);

});

const fillInputs = (values) => {
    personal__Offenses.forEach((input, index) => {
        if (index < values.length) {
            input.value = values[index];
        }
    });
};

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

update_Offense.addEventListener('click', () => {
    let updatedValues = Array.from(personal__Offenses).map(input => input.value);

    globalInputValues = globalInputValues.map(card => {
        if (card.id === offenseBeingEditedId) {
            card.values = updatedValues;
        }
        return card;
    });

    const offenseCardElements = document.querySelectorAll('.card');
    offenseCardElements.forEach(cardElement => {
        if (cardElement.dataset.id === String(offenseBeingEditedId)) {
            const paragraphs = cardElement.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                p.textContent = updatedValues[index] || '';
            });
        }
    });

    console.log(globalInputValues);

    // Reset the UI after updating
    update_Offense.style.display = 'none';
    add_Offense.style.display = 'block';
    personal__Offenses.forEach(input => input.value = '');
});

skill.addEventListener('input', ()=>{

    let isChanged = skills_words.some((word)=>{
        if(skill.value.length !== 0 && word.startsWith(skill.value)){
            overlay.style.visibility = 'visible';
            overlay.innerText = word;
            overlay.style.cursor = 'pointer';
            return true;
        }
    });

    if(!isChanged){
        overlay.innerHTML = '';
        overlay.style.cursor = 'default';
        overlay.style.visibility = 'hidden';
    }
});


add_Skill.addEventListener('click', ()=>{

    let skill_Value = skill.value;
    if(skill_Value === '' || skill_Value === null || skill_Value === undefined){
        console.log("NO");
            return;
    }

    const show_Skill_Card = document.querySelector('.show_Skill_Card');

    let skilldItem = document.createElement('div');
    skilldItem.className = 'card'; 
    skilldItem.dataset.id = Date.now();

    let skillData = document.createElement('div');


    let inputValues = [];
    
        let p = document.createElement('p');
        p.textContent = skill.value;

        skillData.appendChild(p);
        skilldItem.appendChild(skillData);

        inputValues.push(skill.value);
        skill.value = '';
    
    const skillId = skilldItem.dataset.id;
    let newCard = new SkillCard(inputValues,skillId);
    globalInputSkills.push(newCard);

    let skillButton = document.createElement('div');
    skillButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    button.addEventListener('click', () => {
        show_Skill_Card.removeChild(skilldItem);
        globalInputSkills = globalInputSkills.filter(card => card.id !== skillId);
        console.log(globalInputSkills);
    });

    
    skillButton.appendChild(button);
    skilldItem.appendChild(skillButton);
    show_Skill_Card.appendChild(skilldItem);

    

    const totalHeight = skill_div.scrollHeight + show_Skill_Card.scrollHeight;
    skill_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalInputSkills);

});

overlay.addEventListener('click', () => {
    if (overlay.innerText.length !== 0) {
        
        skill.value = overlay.innerText;
        overlay.innerHTML = ''; 
        overlay.style.visibility = 'hidden';
    }
});


trainer.addEventListener('input', ()=>{

    let isChanged = trainer_words.some((word)=>{
        if(trainer.value.length !== 0 && word.startsWith(trainer.value)){
            trainer_overlay.style.visibility = 'visible';
            trainer_overlay.innerText = word;
            trainer_overlay.style.cursor = 'pointer';
            return true;
        }
    });

    if(!isChanged){
        trainer_overlay.innerHTML = '';
        trainer_overlay.style.cursor = 'default';
        trainer_overlay.style.visibility = 'hidden';
    }
});


add_Trainer.addEventListener('click', ()=>{

    let trainer_Value = trainer.value;
    if(trainer_Value === '' || trainer_Value === null || trainer_Value === undefined){
        console.log("NO");
            return;
    }

    const show_Trainer_Card = document.querySelector('.show_Trainer_Card');

    let trainerItem = document.createElement('div');
    trainerItem.className = 'card'; 
    trainerItem.dataset.id = Date.now();

    let trainerData = document.createElement('div');


    let inputValues = [];
    
        let p = document.createElement('p');
        p.textContent = trainer.value;

        trainerData.appendChild(p);
        trainerItem.appendChild(trainerData);

        inputValues.push(trainer.value);
        trainer.value = '';
    
    const trainerId = trainerItem.dataset.id;
    let newCard = new TrainerCard(inputValues,trainerId);
    globalInputTrainer.push(newCard);

    let trainerButton = document.createElement('div');
    trainerButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    button.addEventListener('click', () => {
        show_Trainer_Card.removeChild(trainerItem);
        globalInputTrainer = globalInputTrainer.filter(card => card.id !== trainerId);
        console.log(globalInputTrainer);
    });

    
    trainerButton.appendChild(button);
    trainerItem.appendChild(trainerButton);
    show_Trainer_Card.appendChild(trainerItem);

    

    const totalHeight = trainer_div.scrollHeight + show_Trainer_Card.scrollHeight;
    trainer_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalInputTrainer);

});

trainer_overlay.addEventListener('click', () => {
    if (trainer_overlay.innerText.length !== 0) {
        
        trainer.value = trainer_overlay.innerText;
        trainer_overlay.innerHTML = ''; 
        trainer_overlay.style.visibility = 'hidden';
    }
});


trainer.addEventListener('input', ()=>{

    let isChanged = trainer_words.some((word)=>{
        if(trainer.value.length !== 0 && word.startsWith(trainer.value)){
            trainer_overlay.style.visibility = 'visible';
            trainer_overlay.innerText = word;
            trainer_overlay.style.cursor = 'pointer';
            return true;
        }
    });

    if(!isChanged){
        trainer_overlay.innerHTML = '';
        trainer_overlay.style.cursor = 'default';
        trainer_overlay.style.visibility = 'hidden';
    }
});

/*Language */

add_Language.addEventListener('click', ()=>{

    let language_Value = language.value;
    if(language_Value === '' || language_Value === null || language_Value === undefined){
        console.log("NO");
            return;
    }

    const show_Language_Card = document.querySelector('.show_Language_Card');

    let languageItem = document.createElement('div');
    languageItem.className = 'card'; 
    languageItem.dataset.id = Date.now();

    let languageData = document.createElement('div');


    let inputValues = [];
    
        let p = document.createElement('p');
        p.textContent = language.value;

        let writting_P = document.createElement('p');
        writting_P.textContent = writting.value

        let reading_P = document.createElement('p');
        reading_P.textContent = reading.value;

        let speaking_P = document.createElement('p');
        speaking_P.textContent = speaking.value;

        languageData.appendChild(p);
        languageData.appendChild(writting_P);
        languageData.appendChild(reading_P);
        languageData.appendChild(speaking_P);
        languageItem.appendChild(languageData);

        inputValues.push(language.value);
        inputValues.push(writting.value);
        inputValues.push(reading.value);
        inputValues.push(speaking.value);
        language.value = '';
    
    const languageId = languageItem.dataset.id;
    let newCard = new LanguageCard(inputValues,languageId);
    globalInputLanguage.push(newCard);

    let languageButton = document.createElement('div');
    languageButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    button.addEventListener('click', () => {
        show_Language_Card.removeChild(languageItem);
        globalInputLanguage = globalInputLanguage.filter(card => card.id !== languageId);
        console.log(globalInputLanguage);
    });

    
    languageButton.appendChild(button);
    languageItem.appendChild(languageButton);
    show_Language_Card.appendChild(languageItem);

    

    const totalHeight = language_div.scrollHeight + show_Language_Card.scrollHeight;
    language_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalInputLanguage);

});

language_overlay.addEventListener('click', () => {
    
    if (language_overlay.innerText.length !== 0) {
        
        language.value = language_overlay.innerText;
        language_overlay.innerHTML = ''; 
        language_overlay.style.visibility = 'hidden';
    }
});

language.addEventListener('input', ()=>{

    let isChanged = language_words.some((word)=>{
        if(language.value.length !== 0 && word.startsWith(language.value)){
            language_overlay.style.visibility = 'visible';
            language_overlay.innerText = word;
            language_overlay.style.cursor = 'pointer';
            return true;
        }
    });

    if(!isChanged){
        language_overlay.innerHTML = '';
        language_overlay.style.cursor = 'default';
        language_overlay.style.visibility = 'hidden';
    }
});

class OffenseCard {
    constructor(values, id) {
        this.values = values;
        this.id = id;
    }
}

class SkillCard {
    constructor(values, id) {
        this.values = values;
        this.id = id;
    }
}

class TrainerCard {
    constructor(values, id){
        this.values = values;
        this.id = id;
    }
}

class LanguageCard {
    constructor(values, id){
        this.values = values;
        this.id = id;
    }
}
/*Upload */
const fileInput = document.getElementById('upload');
const fileName = document.getElementById('file-name');

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    } else {
        fileName.textContent = 'No file chosen';
    }
});

/*Menu Movil */
const listItems = menu.querySelectorAll('li');
let isClicked = false;
menu.addEventListener('click', ()=>{
     
    if(!isClicked){
        listItems[0].style.transform = 'translateY(15px) rotate(45deg)';
        listItems[1].style.transform = 'rotate(-45deg)';
        listItems[2].style.transform = 'translateY(-15px) rotate(-45deg)';

        hamburger.classList.toggle('active');

    isClicked = true;

    }else{
        listItems.forEach(li => {
            li.style.transform = ''; 
        });
        hamburger.classList.toggle('active');
        isClicked = false;
    }
    
});
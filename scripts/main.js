const send_Form = document.getElementById('send_Form');

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

/*Education*/

const school_Name = document.getElementById('school_Name');
const school_Level = document.getElementById('school_Level');
const course_Study = document.getElementById('course_Study');
const years_Completed = document.getElementById('years_Completed');
const graduated = document.getElementById('graduated');
const Degree_Diploma = document.getElementById('Degree_Diploma');
const add_Education = document.getElementById('add_Education');
const update_Education = document.getElementById('update_Education');
const education_div = document.querySelector('.show_Education_Card');
const education_Container = document.querySelector('.education__container');
const education_inputs = education_Container.querySelectorAll('input, select');


/*Jobs*/
const company_Name = document.getElementById('company_Name');
const company_Address = document.getElementById('company_Address');
const company_Telephone = document.getElementById('company_Telephone');
const company_Supervisor = document.getElementById('company_Supervisor');
const company_Start = document.getElementById('company_Start');
const company_End = document.getElementById('company_End');
const company_Reazon_To_Leave = document.getElementById('company_Reazon_To_Leave');
const company_Starting_Salary = document.getElementById('company_Starting_Salary');
const company_Ending_Salary = document.getElementById('company_Ending_Salary');
const company_Job_Title = document.getElementById('company_Job_Title');
const company_Job_Duties = document.getElementById('company_Job_Duties');
const add_Job = document.getElementById('add_Job');
const update_Job = document.getElementById('update_Job');
const jobs_div = document.querySelector('.show_Jobs_Card');
const job_Container = document.querySelector('.jobs__Container');
const job_inputs = job_Container.querySelectorAll('input, select, textarea');

/*Global Values */
let globalInputValues = [];
let globalInputSkills = [];
let globalInputTrainer = [];
let globalInputLanguage = [];
let globalImputEducation = [];
let globalInputJobs = [];
let offenseBeingEditedId = null;
let educationBeingEditedId = null;
let jobBeingEditedId = null;

let upload_File = [];

/*const for max size */

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

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

/*Education*/

add_Education.addEventListener('click', ()=>{

   

    let checkAllInputs = checkInput(education_inputs);
    
    if(!checkAllInputs){
        console.log("Debe llenar todos los inputs");
        return;
    }

    const show_Education_Card = document.querySelector('.show_Education_Card');

    let educationItem = document.createElement('div');
    educationItem.className = 'card'; 
    educationItem.dataset.id = Date.now();

    let educationData = document.createElement('div');
    educationData.className = 'flex_row';

    let inner_Education = document.createElement('div');
    inner_Education.className = 'flex_card';

    let inner_Level = document.createElement('div');
    inner_Level.className = 'flex_card';

    let inner_Course = document.createElement('div');
    inner_Course.className = 'flex_card';

    let inner_Years = document.createElement('div');
    inner_Years.className = 'flex_card';

    let inner_Graduate = document.createElement('div');
    inner_Graduate.className = 'flex_card';

    let inner_Diploma = document.createElement('div');
    inner_Diploma.className = 'flex_card';

    let inputValues = [];
    
        let school_name_P = document.createElement('p');
        school_name_P.textContent = school_Name.value;

        let school_Icon = document.createElement('i');
        school_Icon.className = 'fa-solid fa-building-columns';

        inner_Education.appendChild(school_Icon);
        inner_Education.appendChild(school_name_P);
        educationData.appendChild(inner_Education);

        let school_Level_P = document.createElement('p');
        school_Level_P.textContent = school_Level.value;

        let level_Icon = document.createElement('i');
        level_Icon.className = 'fa-solid fa-trophy';
        
        inner_Level.appendChild(level_Icon);
        inner_Level.appendChild(school_Level_P);
        educationData.appendChild(inner_Level);

        let school_course_P = document.createElement('p');
        school_course_P.textContent = course_Study.value;

        let course_Icon = document.createElement('i');
        course_Icon.className = 'fa-solid fa-file';

        inner_Course.appendChild(course_Icon);
        inner_Course.appendChild(school_course_P);
        educationData.appendChild(inner_Course);


        let school_years_P = document.createElement('p');
        school_years_P.textContent = years_Completed.value;

        let years__Icon = document.createElement('i');
        years__Icon.className = 'fa-regular fa-calendar';

        inner_Years.appendChild(years__Icon);
        inner_Years.appendChild(school_years_P);
        educationData.appendChild(inner_Years);


        let school_grad_P = document.createElement('p');
        school_grad_P.textContent = graduated.value;

        let grad_Icon = document.createElement('i');
        grad_Icon.className = 'fa-solid fa-graduation-cap';

        inner_Graduate.appendChild(grad_Icon);
        inner_Graduate.appendChild(school_grad_P);
        educationData.appendChild(inner_Graduate);

        let school_Diploma_P = document.createElement('p');
        school_Diploma_P.textContent = Degree_Diploma.value;

        let Diploma_Icon = document.createElement('i');
        Diploma_Icon.className = 'fa-solid fa-scroll';

        inner_Diploma.appendChild(Diploma_Icon);
        inner_Diploma.appendChild(school_Diploma_P);
        educationData.appendChild(inner_Diploma);
       
        educationItem.appendChild(educationData);

        inputValues.push(school_Name.value);
        inputValues.push(school_Level.value);
        inputValues.push(course_Study.value);
        inputValues.push(years_Completed.value);
        inputValues.push(graduated.value);
        inputValues.push(Degree_Diploma.value);

        school_Name.value = '';
        course_Study.value = '';
        years_Completed.value = '';
    
    const educationId = educationItem.dataset.id;
    let newCard = new EducationCard(inputValues,educationId);
    globalImputEducation.push(newCard);

    let educationButton = document.createElement('div');
    educationButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    let update = document.createElement('i');
    update.className = 'fa-solid fa-pen fa-2x';

    button.addEventListener('click', () => {
        show_Education_Card.removeChild(educationItem);
        globalImputEducation = globalImputEducation.filter(card => card.id !== educationId);
        console.log(globalImputEducation);
    });

    update.addEventListener('click', () => {
        fillEducation(inputValues);
        update_Education.style.display = 'block';
        add_Education.style.display = 'none';

        educationBeingEditedId = educationId;
    });
    
    educationButton.appendChild(button);
    educationButton.appendChild(update);
    educationItem.appendChild(educationButton);
    show_Education_Card.appendChild(educationItem);

    

    const totalHeight = education_div.scrollHeight + show_Education_Card.scrollHeight;
    education_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalImputEducation);

});

update_Education.addEventListener('click', () => {
    let updatedValues = Array.from(education_inputs).map(input => input.value);

    globalImputEducation = globalImputEducation.map(card => {
        if (card.id === educationBeingEditedId) {
            card.values = updatedValues;
        }
        return card;
    });

    const educationCardElements = document.querySelectorAll('.card');
    educationCardElements.forEach(cardElement => {
        if (cardElement.dataset.id === String(educationBeingEditedId)) {
            const paragraphs = cardElement.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                p.textContent = updatedValues[index] || '';
            });
        }
    });

    console.log(globalImputEducation);

    // Reset the UI after updating
    update_Education.style.display = 'none';
    add_Education.style.display = 'block';
    education_inputs.forEach(input => input.value = '');
});

const fillEducation = (values) => {
    education_inputs.forEach((input, index) => {
        if (index < values.length) {
            input.value = values[index];
        }
    });
};


/*Jobs*/

add_Job.addEventListener('click', ()=>{

   

    let checkAllInputs = checkInput(job_inputs);
    
    if(!checkAllInputs){
        console.log("Debe llenar todos los inputs");
        return;
    }

    const show_Jobs_Card = document.querySelector('.show_Jobs_Card');

    let jobItem = document.createElement('div');
    jobItem.className = 'card'; 
    jobItem.dataset.id = Date.now();

    let jobData = document.createElement('div');
    jobData.className = 'flex_row';

    let div_For_Duties = document.createElement('div');
    div_For_Duties.className = 'card_span_2';

    let inner_Company_Name = createFlexCardDiv('flex_card');
    let inner_Company_Address = createFlexCardDiv('flex_card');
    let inner_Company_Telephone = createFlexCardDiv('flex_card');
    let inner_Company_Supervisor = createFlexCardDiv('flex_card');
    let inner_Company_Start = createFlexCardDiv('flex_card');
    let inner_Company_End = createFlexCardDiv('flex_card');
    let inner_Company_Reazon_To_Leave = createFlexCardDiv('flex_card');
    let inner_Company_Starting_Salary = createFlexCardDiv('flex_card');
    let inner_Company_Ending_Salary = createFlexCardDiv('flex_card');
    let inner_Company_Job_Title = createFlexCardDiv('flex_card');
    let inner_Company_Duties = createFlexCardDiv('flex_card');

    let inputValues = [];
    
    inner_Company_Name = createIconTextPair('fa-solid fa-building', company_Name.value, 'flex_card');
    jobData.appendChild(inner_Company_Name);
    
    inner_Company_Address = createIconTextPair('fa-solid fa-map-marker-alt', company_Address.value, 'flex_card');
    jobData.appendChild(inner_Company_Address);
    
    inner_Company_Telephone = createIconTextPair('fa-solid fa-phone', company_Telephone.value, 'flex_card');
    jobData.appendChild(inner_Company_Telephone);
    
    inner_Company_Supervisor = createIconTextPair('fa-solid fa-user-tie', company_Supervisor.value, 'flex_card');
    jobData.appendChild(inner_Company_Supervisor);
    
    inner_Company_Start = createIconTextPair('fa-solid fa-calendar', company_Start.value, 'flex_card');
    jobData.appendChild(inner_Company_Start);
    
    inner_Company_End = createIconTextPair('fa-solid fa-calendar', company_End.value, 'flex_card');
    jobData.appendChild(inner_Company_End);
    
    inner_Company_Reazon_To_Leave = createIconTextPair('fa-regular fa-comment', company_Reazon_To_Leave.value, 'flex_card');
    jobData.appendChild(inner_Company_Reazon_To_Leave);
    
    inner_Company_Starting_Salary = createIconTextPair('fa-solid fa-dollar-sign', company_Starting_Salary.value, 'flex_card');
    jobData.appendChild(inner_Company_Starting_Salary);

    inner_Company_Ending_Salary = createIconTextPair('fa-solid fa-dollar-sign', company_Ending_Salary.value, 'flex_card');
    jobData.appendChild(inner_Company_Ending_Salary);

    inner_Company_Job_Title = createIconTextPair('fa-solid fa-briefcase', company_Job_Title.value, 'flex_card');
    jobData.appendChild(inner_Company_Job_Title);

    inner_Company_Duties = createIconTextPair('fa-solid fa-tasks', company_Job_Duties.value, 'flex_card');
    div_For_Duties.appendChild(inner_Company_Duties);
    
    jobItem.appendChild(jobData);

        inputValues.push(company_Name.value);
        inputValues.push(company_Address.value);
        inputValues.push(company_Telephone.value);
        inputValues.push(company_Supervisor.value);
        inputValues.push(company_Start.value);
        inputValues.push(company_End.value);
        inputValues.push(company_Reazon_To_Leave.value);
        inputValues.push(company_Starting_Salary.value);
        inputValues.push(company_Ending_Salary.value);
        inputValues.push(company_Job_Title.value);
        inputValues.push(company_Job_Duties.value);

        company_Name.value = '';
        company_Address.value = '';
        company_Telephone.value = '';
        company_Supervisor.value = '';
        company_Start.value ='';
        company_End.value = '';
        company_Reazon_To_Leave.value = '';
        company_Starting_Salary.value = '';
        company_Ending_Salary.value = '';
        company_Job_Title.value = '';
        company_Job_Duties.value = '';
    
    const jobId = jobItem.dataset.id;
    let newCard = new JobCard(inputValues,jobId);
    globalInputJobs.push(newCard);

    let jobButton = document.createElement('div');
    jobButton.className = 'flex-row';

    let button = document.createElement('i');
    button.className = 'fa-solid fa-trash fa-2x';

    let update = document.createElement('i');
    update.className = 'fa-solid fa-pen fa-2x';

    button.addEventListener('click', () => {
        show_Jobs_Card.removeChild(jobItem);
        globalInputJobs = globalInputJobs.filter(card => card.id !== jobId);
        console.log(globalInputJobs);
    });

    update.addEventListener('click', () => {
        fillJob(inputValues);
        update_Job.style.display = 'block';
        add_Job.style.display = 'none';

        jobBeingEditedId = jobId;
    });
    
    jobButton.appendChild(button);
    jobButton.appendChild(update);
    jobItem.appendChild(jobButton);
    jobItem.appendChild(div_For_Duties);
    show_Jobs_Card.appendChild(jobItem);

    

    const totalHeight = jobs_div.scrollHeight + show_Jobs_Card.scrollHeight;
    jobs_div.style.maxHeight = `${totalHeight}px`;
    console.log(globalInputJobs);

});

update_Job.addEventListener('click', () => {
    let updatedValues = Array.from(job_inputs).map(input => input.value);

    globalInputJobs = globalInputJobs.map(card => {
        if (card.id === jobBeingEditedId) {
            card.values = updatedValues;
        }
        return card;
    });

    const jobCardElements = document.querySelectorAll('.card');
    jobCardElements.forEach(cardElement => {
        if (cardElement.dataset.id === String(jobBeingEditedId)) {
            const paragraphs = cardElement.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                p.textContent = updatedValues[index] || '';
            });
        }
    });

    console.log(globalInputJobs);

    // Reset the UI after updating
    update_Job.style.display = 'none';
    add_Job.style.display = 'block';
    job_inputs.forEach(input => input.value = '');
});

const fillJob = (values) => {
    job_inputs.forEach((input, index) => {
        if (index < values.length) {
            input.value = values[index];
        }
    });
};



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

class EducationCard {
    constructor(values, id){
        this.values = values;
        this.id = id;
    }
}

class JobCard {
    constructor(values, id){
        this.values = values;
        this.id = id;
    }
}

class UploadFile {
    constructor(name, type, size){

        this.name = name;
        this.type = type;
        this.size = size;
    }
}

/*Upload */
const fileInput = document.getElementById('upload');
const fileName = document.getElementById('file-name');

fileInput.addEventListener('change', () => {

    if (fileInput.files.length === 0) {
        fileName.textContent = 'No file chosen';
        return;
    }

    const file = fileInput.files[0];

    if (file.size > MAX_FILE_SIZE_BYTES) {
        fileName.textContent = 'File size exceeds 20 MB';
        return; 
    }

    fileName.textContent = file.name;

    upload_File = new UploadFile(file.name, file.type, file.size);

    console.log(upload_File);
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

/*Check all Input*/
let checkInput = (list_Inputs) =>{

    let allInputsFilled = true;
    list_Inputs.forEach(input => {
        if (input.value.trim() === '') {
            allInputsFilled = false;
        }
    });
    return allInputsFilled;
};

/*Automatic DOM Creation */
const createFlexCardDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
};

const createIconTextPair = (iconClass, textContent, className) => {
    let container = document.createElement('div');
    container.className = className;
    
    let icon = document.createElement('i');
    icon.className = iconClass;

    let text = document.createElement('p');
    text.textContent = textContent;

    container.appendChild(icon);
    container.appendChild(text);

    return container;
};
/*-------------------------------------------------- */

/*Check Mandatory Values */
function validateMandatoryFields() {
    const mandatoryFields = document.querySelectorAll('[data-value="mandatory"]');
    let allValid = true;

    mandatoryFields.forEach(field => {
        let value;
        if (field.tagName === 'TEXTAREA' || (field.tagName === 'INPUT' && field.type !== 'file')) {
            value = field.value;
        } else if (field.tagName === 'SELECT') {
            value = field.options[field.selectedIndex].value;
        }

        if (value.trim() !== '') {
            field.style.borderRight = "5px solid green";
        } else {
            field.style.borderRight = "5px solid red";
            allValid = false;

            const fieldRect = field.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollTo = window.scrollY + fieldRect.top - (windowHeight / 2) + (fieldRect.height / 2);

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    });

    return allValid;
}

/*Submit Method*/
send_Form.addEventListener('click', () =>{

    send_Form.disabled = true;
    
    let isValidInput = validateMandatoryFields();
    if(!isValidInput){
        send_Form.disabled = false;
        return;
    }

    console.log("OK");

});
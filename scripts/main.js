const terminated_1 = document.getElementById('option1');
const terminated_2 = document.getElementById('option2');
const explain = document.getElementById('explain');
const exlain_div = document.getElementById('explain_Container');

var radios = document.querySelectorAll('input[name="options"]');
var different_Names = document.querySelectorAll('input[name="different"]');
var convicted_radio = document.querySelectorAll('input[name="convicted"]');

const name_1 = document.getElementById('different1');
const name_different_Input = document.getElementById('different_explain');

const convicted1 = document.getElementById('convicted1');
const convicted_div = document.getElementById('personal__Form-convicted');

/*Buttons Offense */
const add_Offense = document.getElementById('add_Offense');
const personal__Offenses = document.querySelectorAll('input[name="offense"]')
const card = document.getElementById('show_Offense_Card');
const personal__Name = document.querySelector('.personal__Name');
const update_Offense = document.getElementById('update_Offense');


/*Test */

const skills_words = [
    "Lawyer", "Mechanics", "Paralegal", "Programmer", "Profesor","Secretary"
];

const skill = document.getElementById('skill');
const overlay = document.getElementById('overlay');


let globalInputValues = [];
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
        update_Offense.style.display = 'flex';
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
    add_Offense.style.display = 'flex';
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

overlay.addEventListener('click', () => {
    if (overlay.innerText.length !== 0) {
        
        skill.value = overlay.innerText;
        overlay.innerHTML = ''; 
        overlay.style.visibility = 'hidden';
    }
});


class OffenseCard {
    constructor(values, id) {
        this.values = values;
        this.id = id;
    }
}
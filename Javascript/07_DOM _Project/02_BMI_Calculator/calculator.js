const bmi = document.querySelector('form')

// In this case if you will write height or weight code here outside the form , it will not work and give empty because they are inside a form and we need to get their values as results
// const height = parseInt(document.querySelector('#height').value)

bmi.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)  // parseInt will convert the output value(i.e string into integer)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'please give valid height !'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'please give valid weight !'
    }else{
        const bmiCalcalculator = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmiCalcalculator}</span>`
    }


}) 
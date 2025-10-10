function bmiCalculate(weight,height){
    return (weight/(height*height));
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").onsubmit = () =>{
        const weight = document.querySelector("#weight").value;
        const height = document.querySelector("#height").value;
        let bmi = bmiCalculate(weight,height);
        const result = document.querySelector("#result");
        if(bmi<18.5){
            result.innerHTML = "your BMI is "+ bmi +", underweight";
            result.style.color = "orange";
        }else if(bmi>18.5 && bmi<24.9){
            result.innerHTML = "your BMI is "+ bmi +", normal";
            result.style.color = "black";
        }else{
            result.innerHTML = "your BMI is "+ bmi +", overweight";
            result.style.color = "red";
        }
        return false;
    }
})
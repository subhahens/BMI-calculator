function bmiCalculate(weight,height){
    return (weight/(height*height));
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").onsubmit = () =>{
        const weight = document.querySelector("#weight").value;
        const height = document.querySelector("#height").value;
        let bmi = bmiCalculate(weight,height);
        const result = document.querySelector("#result");
        result.innerHTML = "your BMI is "+ bmi +" ";
        return false;
    }
})
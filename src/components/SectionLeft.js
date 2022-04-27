import React from 'react'


function caculation() {
  
  let bmiResult = document.querySelector('.displayResult')
  let inputHigh = document.querySelector('.inputHigh')
  let inputWeight = document.querySelector('.inputWeight')

  if (inputHigh.value >= 250 || inputHigh.value <= 30) {
    alert('請輸入有效的身高')
    return
  } else if (inputWeight.value >= 300 || inputWeight.value <= 0) {
    alert('請輸入有效的體重')
    return
  }

  if (inputHigh.value === '' || inputWeight.value === '') {
    alert('請輸入身高CM、體重KG')
    return
  } 

  let high = inputHigh.value / 100
  let weight = inputWeight.value
  let currentBMI = weight / (high ** 2)
  currentBMI = currentBMI.toFixed(1)
  bmiResult.innerHTML = `BMI = ${currentBMI}`

}

function sectionLeft() {
  return (
    <div class='sectionLeft'>
      <div className="sectionBackground">
      <section className="firstSection">
        <div className="personalInfo">
          <label >目前身高<input class='inputHigh' type="number" /></label>
          <label >目前體重<input class='inputWeight' type="number" /></label>
        </div>
          <button class='resultBtn' onClick={caculation}>計算</button>
        </section>

      <second className="secondSection">
        <p className="displayResult"> BMI = </p>
      </second>

      <section className="thirdSection">
        <p>計算方式</p>
        <p>BMI值計算公式： BMI = 體重( kg )  /  身高平方( m )</p>
      </section>
      </div>

    </div>
  )
}

export default sectionLeft
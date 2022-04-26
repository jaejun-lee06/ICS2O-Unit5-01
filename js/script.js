// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider;
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  const sliderValue = slider.value;

  // correct answer
  if (sliderValue == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " Great job!";

  }
  //  incorrect answer
  if (sliderValue != randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " Good try";
  }
}

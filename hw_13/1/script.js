let currentLightIndex = 0;
  const lights = ['red', 'yellow', 'green'];

  function changeLight() {
    document.getElementById(lights[currentLightIndex]).style.backgroundColor = '#ccc';
    currentLightIndex = (currentLightIndex + 1) % lights.length;
    document.getElementById(lights[currentLightIndex]).style.backgroundColor = lights[currentLightIndex];
  }
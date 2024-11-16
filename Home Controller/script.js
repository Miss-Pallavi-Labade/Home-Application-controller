document.addEventListener('DOMContentLoaded', function() {
    const acToggle = document.getElementById('ac-toggle');
    const acTempSlider = document.getElementById('ac-temp');
    const acTempValue = document.getElementById('ac-temp-value');

    const fanToggle = document.getElementById('fan-toggle');
    const fanSpeedSlider = document.getElementById('fan-speed');
    const fanSpeedValue = document.getElementById('fan-speed-value');

    const lightsToggle = document.getElementById('lights-toggle');
    const lightBrightnessSlider = document.getElementById('light-brightness');
    const lightBrightnessValue = document.getElementById('light-brightness-value');
    const lightColorPicker = document.getElementById('light-color');

    const tvToggle = document.getElementById('tv-toggle');

    acTempValue.textContent = `${acTempSlider.value}°C`;
    fanSpeedValue.textContent = fanSpeedSlider.value;
    lightBrightnessValue.textContent = `${lightBrightnessSlider.value}%`;

    acToggle.addEventListener('click', function() {
        acToggle.classList.toggle('active');
        acToggle.textContent = acToggle.classList.contains('active') ? 'ON' : 'OFF';
    });

    fanToggle.addEventListener('click', function() {
        fanToggle.classList.toggle('active');
        fanToggle.textContent = fanToggle.classList.contains('active') ? 'ON' : 'OFF';
    });

    lightsToggle.addEventListener('click', function() {
        lightsToggle.classList.toggle('active');
        lightsToggle.textContent = lightsToggle.classList.contains('active') ? 'ON' : 'OFF';
    });

    tvToggle.addEventListener('click', function() {
        tvToggle.classList.toggle('active');
        tvToggle.textContent = tvToggle.classList.contains('active') ? 'ON' : 'OFF';
    });

    acTempSlider.addEventListener('input', function() {
        acTempValue.textContent = `${acTempSlider.value}°C`;
    });

    fanSpeedSlider.addEventListener('input', function() {
        fanSpeedValue.textContent = fanSpeedSlider.value;
    });

    lightBrightnessSlider.addEventListener('input', function() {
        lightBrightnessValue.textContent = `${lightBrightnessSlider.value}%`;
    });

   
});

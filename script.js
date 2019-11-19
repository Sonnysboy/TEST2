function initSensor() {
  sensor = new AbsoluteOrientationSensor({ frequency: 60 });
  sensor.onreading = () => model.quaternion.fromArray(sensor.quaternion);
  sensor.onerror = event => {
    if (event.error.name == 'NotReadableError') {
      alert("Sensor is not available.");
    } else {
      alert('can');
    }
  }
  sensor.start();
}
initSensor();
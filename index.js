document.addEventListener('DOMContentLoaded', () => {
  // ensure script is loading
  console.log('dom loaded');

  const removeDebugContainerDisplay = () => {
    console.log('removing display');
    let debugContainer = document.getElementById('arjsDebugUIContainer');
    debugContainer.style.display = 'none';
  };

  function vibrateDevice() {
    window.navigator.vibrate(200);
    console.log('device vibrated');
  };

  const getScreenShot = () => {
    const vidStream = document.getElementsByTagName('video')[0];
    console.log('vidStream', vidStream);
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const captureButton = document.getElementById('screenshot');

    const constraints = {
      video: true,
    };

    captureButton.addEventListener('click', () => {
      context.drawImage(vidStream, 0, 0, canvas.width, canvas.height);
      let dl = document.createElement('a');
      dl.href = canvas.toDataURL();
      dl.download = 'Image';
      dl.click();
    });

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        vidStream.srcObject = stream;
      });
  }

  const runModScripts = () => {
    removeDebugContainerDisplay();
    vibrateDevice();
    getScreenShot();
  }

  setTimeout(runModScripts, 8000);

});
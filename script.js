function restartHelloWorldAnimation() {
  const hello = document.getElementById('hello-text');
  hello.style.animation = 'none';
  hello.offsetHeight;
  hello.style.animation = 'typing 3s steps(22) forwards, blink 0.75s step-end infinite';
}

// restart every 5 seconds
setInterval(restartHelloWorldAnimation, 5000);
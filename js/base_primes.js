class BasePrimes {
  constructor(button, list, benchmark) {
    this.button = button;
    this.list = list;
    this.benchmark = benchmark;

    this.timeMeasurements = [];
  }

  initialize() {}

  enableButton() {
    this.button.disabled = false;
    this.button.addEventListener('click', this.onButtonClicked.bind(this));
  }

  onButtonClicked() {
    this.clearList();

    const t0 = performance.now();
    this.findPrimes();
    const t1 = performance.now();
    this.reportTime(t1 - t0);

    this.primes.forEach(primeNumber => {
      const li = document.createElement('li');
      li.innerHTML = primeNumber;
      this.list.appendChild(li);
    });
  }

  clearList() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  reportTime(time) {
    this.timeMeasurements.push(time);
    const count = this.timeMeasurements.length;
    const mean = this.timeMeasurements.reduce((x, y) => x + y) / count;
    this.benchmark.innerHTML = `Last time: ${time.toFixed(4)} ms<br/> Average time: ${mean.toFixed(4)} ms (${count} measurement${count > 1 ?  's' : ''})`;
  }
}

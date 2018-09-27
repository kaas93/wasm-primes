class WasmPrimes extends BasePrimes {
  initialize() {
    const imports = {};
    fetch('primes.wasm')
      .then(response => response.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, imports))
      .then(this.onModuleLoaded.bind(this));
  }

  onModuleLoaded({instance}) {
    this.exports = instance.exports;
    this.offset = this.exports.get_buffer_offset();
    this.length = 100;
    this.primes = new Int32Array(this.exports.memory.buffer, this.offset, this.length);

    this.enableButton();
  }

  findPrimes() {
    this.exports.find_primes(this.offset, this.length);
  }
}

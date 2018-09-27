#include <stdio.h>
#include "primes.h"

int main() {
  const int n = 100;
  int primes[n];
  find_primes(primes, n);

  printf("First %d prime numbers are:\n", n);
  for (int i = 0; i < n; i++) {
    printf("%d ", primes[i]);
  }
  printf("\n");

  return 0;
}

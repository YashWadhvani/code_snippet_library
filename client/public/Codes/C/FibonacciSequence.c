#include <stdio.h>

int main()
{
   int a, b, n, next;

   a = 0;
   b = 1;
   next = a + b;

   printf("Enter Number of Terms: ");
   scanf("%d", &n);

   printf("Fibonacci Series : %d %d ", a, b);

   for (int i = 3; i <= n; ++i)
   {
      printf("%d ", next);
      a = b;
      b = next;
      next = a + b;
   }

   return 0;
}
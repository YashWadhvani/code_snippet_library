#include <stdio.h>

int main()
{
    float c, f;

    printf("Enter Temperature in Celsius :-\n");
    scanf("%f", &c);

    f = c * 9 / 5 + 32;

    printf("Temperature in Farhenheit = %f", f);
    return 0;
}
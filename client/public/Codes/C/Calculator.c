#include <stdio.h>
#include <conio.h>

int main()
{
    int a, b;
    float result = 0;
    char operation;

    printf("Enter 2 Numbers :-");
    scanf("%d %d", &a, &b);
    printf("Enter Operation (+,-,*,/,Modulo):-");
    scanf("%s", &operation);

    switch (operation)
    {
    case '+':
        result = a + b;
        break;

    case '-':
        result = a - b;
        break;

    case '*':
        result = a * b;
        break;

    case '/':
        if (b == 0)
            printf("Division By Zero Exception!");
        else
            result = a / b;
        break;

    case '%':
        result = a % b;
        break;

    default:
        printf("Wrong Operation Input!");
        break;
    }
    printf("Result = %f", result);
    return 0;
}

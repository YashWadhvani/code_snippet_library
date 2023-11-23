#include <stdio.h>

void CheckOddEven(int num)
{
    if (num % 2 == 0)
    {
        printf("%d is Even.", num);
    }
    else
    {
        printf("%d is Odd.", num);
    }
}

int main()
{
    int num;
    printf("Enter a Number:");
    scanf("%d", &num);

    CheckOddEven(num);
    return 0;
}

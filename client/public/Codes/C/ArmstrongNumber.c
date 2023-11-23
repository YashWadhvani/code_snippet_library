#include <stdio.h>
#include <math.h>

int armstrong(int num)
{
    int originalNum, remainder, n = 0;
    float result = 0.0;

    originalNum = num;

    for (originalNum = num; originalNum != 0; ++n)
    {
        originalNum /= 10;
    }

    for (originalNum = num; originalNum != 0; originalNum /= 10)
    {
        remainder = originalNum % 10;
        result += pow(remainder, n);
    }

    if ((int)result == num)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int main()
{
    int num, arm = 0;
    printf("Enter a Number:");
    scanf("%d", &num);

    arm = armstrong(num);

    if (arm == 1)
    {
        printf("%d is an Armstrong Number.", num);
    }
    else
    {
        printf("%d is not an Armstrong Number.\n", num);
    }

    return 0;
}
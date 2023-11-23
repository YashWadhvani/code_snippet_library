#include <stdio.h>

void swap(int a, int b)
{
    a = a + b;
    b = a - b;
    a = a - b;
    printf("After Swapping:\n");
    printf("a = %d, b = %d", a, b);
}

int main()
{
    int a, b;
    printf("Enter 2 Numbers:");
    scanf("%d %d", &a, &b);
    printf("Before Swapping:\n");
    printf("a = %d, b = %d\n", a, b);
    swap(a, b);
    return 0;
}
#include <iostream>
#include <math.h>

int main() {
	float kilometers;
	std::cout << "Please enter kilometers:";
	std::cin >> kilometers;
	float miles = kilometers / 1.6;
	std::cout << miles << " Miles";
}
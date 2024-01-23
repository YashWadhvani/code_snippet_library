import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Number:");
        int num = scanner.nextInt();
        int arm = armstrong(num);
        if (arm == 1) {
            System.out.printf("%d is an Armstrong Number.", num);
        } else {
            System.out.printf("%d is not an Armstrong Number.\n", num);
        }

        scanner.close();
    }

    public static int armstrong(int num) {
        int originalNum, remainder, n = 0;
        float result = 0.0f;
        originalNum = num;
        for (originalNum = num; originalNum != 0; ++n) {
            originalNum /= 10;
        }
        for (originalNum = num; originalNum != 0; originalNum /= 10) {
            remainder = originalNum % 10;
            result += Math.pow(remainder, n);
        }
        if ((int) result == num) {
            return 1;
        } else {
            return 0;
        }
    }
}

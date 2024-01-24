
import java.util.Scanner;

public class Swap {
    public static void swap(int a, int b) {
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("After Swapping:");
        System.out.println("a = " + a + ", b = " + b);
    }

    public static void main(String[] args) {
        int a, b;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter 2 Numbers:");
        a = scanner.nextInt();
        b = scanner.nextInt();
        System.out.println("Before Swapping:");
        System.out.println("a = " + a + ", b = " + b);
        swap(a, b);

        scanner.close();
    }
}

import java.util.Scanner;

public class PosNegOrZeroNum {
    public static void main(String[] args) {
        int num;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a Number:");
        num = scanner.nextInt();

        if (num > 0) {
            System.out.println(num + "is Positive.");
        } else if (num < 0) {
            System.out.println(num + "is Negative.");
        } else {
            System.out.println(num + "is Zero.");
        }

        scanner.close();
    }
}

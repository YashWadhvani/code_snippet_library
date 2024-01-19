import java.util.Scanner;

public class OddOrEven {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a Number :-");
        int a = scanner.nextInt();
        if (a % 2 == 0) {
            System.out.println(a + " is Even.");
        } else {
            System.out.println(a + " is Odd.");
        }

        scanner.close();
    }
}
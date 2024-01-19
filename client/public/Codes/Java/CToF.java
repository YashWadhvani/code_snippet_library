import java.util.Scanner;

public class CToF {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Temperature in Celsius :");
        int celsius = scanner.nextInt();
        double fahrenheit = (1.8 * celsius) + 32;
        System.out.println("Temperature in Fahrenheit : " + fahrenheit);
        scanner.close();
    }
}

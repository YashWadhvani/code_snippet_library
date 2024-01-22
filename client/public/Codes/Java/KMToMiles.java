import java.util.Scanner;

public class KMToMiles {
    public static void main(String[] args) {
        double km, miles;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the distance (in Km): ");
        km = scanner.nextDouble();
        miles = km / 1.6;
        System.out.println(String.format("%.2f Kilometers = %.2f Miles", km, miles));

        scanner.close();
    }
}
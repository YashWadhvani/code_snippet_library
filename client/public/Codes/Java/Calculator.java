import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        int a, b;
        float result = 0;
        char operation;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter 2 Numbers :-");
        a = scanner.nextInt();
        b = scanner.nextInt();
        System.out.print("Enter Operation (+,-,*,/,Modulo):-");
        operation = scanner.next().charAt(0);
        switch (operation) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b == 0)
                    System.out.println("Division By Zero Exception!");
                else
                    result = (float) a / b;
                break;
            case '%':
                result = a % b;
                break;
            default:
                System.out.println("Wrong Operation Input!");
                break;
        }
        System.out.println("Result = " + result);

        scanner.close();
    }
}

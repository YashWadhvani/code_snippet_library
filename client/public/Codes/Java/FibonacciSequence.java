import java.util.*;

public class FibonacciSequence {

    public static void main(String[] args) {
        int terms, t1 = 0, t2 = 1, t3, count = 0;
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter No of Terms for Fibonacci Sequence :-");
            terms = sc.nextInt();
        }
        if (terms < 0) {
            System.out.println("Enter Positive Value for Number of Terms.");
        } else if (terms == 1) {
            System.out.println("Fibonacci Sequence upto " + terms + " Term :");
            System.out.println(t1);
        } else {
            System.out.println("Fibonacci Sequence upto " + terms + " Terms :");
            while (terms > count) {
                System.out.print(t1 + " ");
                t3 = t1 + t2;
                t1 = t2;
                t2 = t3;
                count++;
            }
        }
    }
}

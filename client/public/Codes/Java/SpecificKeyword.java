import java.util.Scanner;

public class SpecificKeyword {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str;
        String toSearch;
        int count;
        System.out.print("Enter any string: ");
        str = scanner.nextLine();
        System.out.print("Enter word to search occurrences: ");
        toSearch = scanner.nextLine();
        count = countOccurrences(str, toSearch);
        System.out.println(count);

        scanner.close();
    }

    public static int countOccurrences(String str, String toSearch) {
        int i, j, found, count;
        int stringLen, searchLen;
        stringLen = str.length();
        searchLen = toSearch.length();
        count = 0;
        for (i = 0; i <= stringLen - searchLen; i++) {
            found = 1;
            for (j = 0; j < searchLen; j++) {
                if (str.charAt(i + j) != toSearch.charAt(j)) {
                    found = 0;
                    break;
                }
            }
            if (found == 1) {
                count++;
            }
        }
        return count;
    }
}

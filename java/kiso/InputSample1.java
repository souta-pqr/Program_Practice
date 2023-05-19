import java.util.Scanner;

public class InputSample1 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String str1 = scan.next();
		String str2 = scan.next();

		System.out.println(str1);
		System.out.println(str2);
		scan.close();
	}
}

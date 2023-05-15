public class TestApp2 {
	public static void main(String[] args) {
		loop1:
		for (int i=0; i<10; i++) {
			for (int j=0; j<10; j++) {
				if (j>5) {
					break loop1;
				}
			System.out.printf("(%d %d)", i, j);
			}
		}
		System.out.println();
	}
}

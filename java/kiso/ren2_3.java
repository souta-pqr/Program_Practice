public class ren2_3 {
        public static void main(String[] args) {
                System.out.println("youkosouranainoyakatahe");
                System.out.println("anatanonamaewonyuuryokusitekudasai");
				String name = new java.util.Scanner(System.in).nextLine();
				System.out.println("anatanonennreiwonyuuryokusitekudasai");
				String ageString = new java.util.Scanner(System.in).nextLine();
				int age = Integer.parseInt(ageString);
				int fortune = new java.util.Random().nextInt(4);
				fortune++;
				System.out.println("uranainokekkagademasita");
				System.out.println(age + "toshino" + name + "sann, anatanounnkibanngouha" + fortune + "desu");
				System.out.println("1: daikiti  2: tyuukiti  3:kiti  4: kyou");
		}
}

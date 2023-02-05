import java.util.Scanner;

public class TravelExpenseTracker {

  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);

    double totalExpense = 0.0;

    System.out.println("Welcome to the Travel Expense Tracker");

    while (true) {
      System.out.print("Enter expense category (or type 'quit' to exit): ");
      String category = input.nextLine();
      if (category.equalsIgnoreCase("quit")) {
        break;
      }
      System.out.print("Enter expense amount: $");
      double amount = input.nextDouble();
      totalExpense += amount;
      input.nextLine();
      System.out.println("Expense of $" + amount + " added for category: " + category);
    }

    System.out.println("Total expenses: $" + totalExpense);
  }
}

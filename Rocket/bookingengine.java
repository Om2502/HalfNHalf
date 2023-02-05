import java.util.Scanner;

public class BookingEngine {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String flight = "";
        double flightPrice = 0.0;
        String hotel = "";
        double hotelPrice = 0.0;
        String transportation = "";
        double transportationPrice = 0.0;

        System.out.println("Welcome to the Booking Engine");

        System.out.print("Enter flight information (airline, price): ");
        flight = input.nextLine();
        flightPrice = input.nextDouble();
        input.nextLine();

        System.out.print("Enter hotel information (hotel name, price per night): ");
        hotel = input.nextLine();
        hotelPrice = input.nextDouble();
        input.nextLine();

        System.out.print("Enter transportation information (transportation type, price per day): ");
        transportation = input.nextLine();
        transportationPrice = input.nextDouble();

        double totalCost = flightPrice + (hotelPrice * 7) + (transportationPrice * 7);

        System.out.println("\nHere is your booking summary:");
        System.out.println("Flight: " + flight + " - $" + flightPrice);
        System.out.println("Hotel: " + hotel + " - $" + hotelPrice + " per night");
        System.out.println("Transportation: " + transportation + " - $" + transportationPrice + " per day");
        System.out.println("Total Cost: $" + totalCost);
    }
}
// the user to input flight, hotel, and transportation information, including their respective prices.
// The total cost for a 7-day trip is calculated and displayed in the summary at the end.
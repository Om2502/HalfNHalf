import java.util.Scanner;

public class TravelItinerary {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String flightInformation = "";
        String hotelBooking = "";
        String localTransportation = "";

        System.out.println("Welcome to the Travel Itinerary Planner");

        System.out.print("Enter flight information (airline, flight number, departure and arrival time): ");
        flightInformation = input.nextLine();

        System.out.print("Enter hotel booking (hotel name, room type, number of nights): ");
        hotelBooking = input.nextLine();

        System.out.print("Enter local transportation (type, cost per day): ");
        localTransportation = input.nextLine();

        System.out.println("\nHere is your itinerary:");
        System.out.println("Flight Information: " + flightInformation);
        System.out.println("Hotel Booking: " + hotelBooking);
        System.out.println("Local Transportation: " + localTransportation);
    }
}

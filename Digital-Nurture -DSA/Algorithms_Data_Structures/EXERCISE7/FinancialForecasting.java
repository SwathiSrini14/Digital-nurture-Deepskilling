package Algorithms_Data_Structures.EXERCISE7;

public class FinancialForecasting {

    public static double forecast(double amount, double rate, int years) {

        if (years == 0) {
            return amount;
        }

        return forecast(amount * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {

        double initialAmount = 1000;   // starting value
        double growthRate = 0.10;      // 10% growth
        int years = 5;                 // number of years

        double result = forecast(initialAmount, growthRate, years);

        System.out.println("Future Value: " + result);
    }
}
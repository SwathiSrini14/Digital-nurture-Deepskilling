
public class Exercise7_FinancialForecasting {

    // Recursive approach: O(n) time, O(n) space (call stack)
    static double futureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue; // base case
        }
        return futureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Optimized iterative approach: O(n) time, O(1) space
    static double futureValueIterative(double presentValue, double growthRate, int years) {
        double result = presentValue;
        for (int i = 0; i < years; i++) {
            result *= (1 + growthRate);
        }
        return result;
    }

    // Optimized closed-form approach using Math.pow: O(1) calls (log n internally)
    static double futureValueFormula(double presentValue, double growthRate, int years) {
        return presentValue * Math.pow(1 + growthRate, years);
    }

    public static void main(String[] args) {
        double presentValue = 100000.0; // e.g., current revenue
        double growthRate = 0.08;       // 8% annual growth
        int years = 5;

        double recursiveResult = futureValueRecursive(presentValue, growthRate, years);
        double iterativeResult = futureValueIterative(presentValue, growthRate, years);
        double formulaResult = futureValueFormula(presentValue, growthRate, years);

        System.out.printf("Recursive result : %.2f%n", recursiveResult);
        System.out.printf("Iterative result : %.2f%n", iterativeResult);
        System.out.printf("Formula result   : %.2f%n", formulaResult);
    }
}

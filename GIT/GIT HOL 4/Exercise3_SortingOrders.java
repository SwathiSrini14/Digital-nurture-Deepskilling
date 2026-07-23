
import java.util.Arrays;

public class Exercise3_SortingOrders {

    static class Order {
        String orderId;
        String customerName;
        double totalPrice;

        Order(String orderId, String customerName, double totalPrice) {
            this.orderId = orderId;
            this.customerName = customerName;
            this.totalPrice = totalPrice;
        }

        @Override
        public String toString() {
            return "Order{id=" + orderId + ", customer=" + customerName + ", total=" + totalPrice + "}";
        }
    }

    // Bubble Sort by totalPrice: O(n^2)
    static void bubbleSort(Order[] orders) {
        int n = orders.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (orders[j].totalPrice > orders[j + 1].totalPrice) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // already sorted, exit early
        }
    }

    // Quick Sort by totalPrice: O(n log n) average
    static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(orders, low, high);
            quickSort(orders, low, pivotIndex - 1);
            quickSort(orders, pivotIndex + 1, high);
        }
    }

    static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].totalPrice;
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (orders[j].totalPrice <= pivot) {
                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }
        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        Order[] ordersForBubble = {
                new Order("O1", "Asha", 2500.00),
                new Order("O2", "Ravi", 799.50),
                new Order("O3", "Meena", 15200.00),
                new Order("O4", "Karthik", 350.00),
                new Order("O5", "Divya", 8999.00)
        };
        Order[] ordersForQuick = ordersForBubble.clone();

        System.out.println("--- Before Sorting ---");
        System.out.println(Arrays.toString(ordersForBubble));

        bubbleSort(ordersForBubble);
        System.out.println("\n--- After Bubble Sort ---");
        System.out.println(Arrays.toString(ordersForBubble));

        quickSort(ordersForQuick, 0, ordersForQuick.length - 1);
        System.out.println("\n--- After Quick Sort ---");
        System.out.println(Arrays.toString(ordersForQuick));
    }
}

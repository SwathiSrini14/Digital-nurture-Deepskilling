
import java.util.Arrays;
import java.util.Comparator;

public class Exercise2_SearchFunction {

    static class Product {
        String productId;
        String productName;
        String category;

        Product(String productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return "Product{id=" + productId + ", name=" + productName + ", category=" + category + "}";
        }
    }

    // Linear Search: O(n)
    static Product linearSearch(Product[] products, String productId) {
        for (Product p : products) {
            if (p.productId.equals(productId)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search: O(log n) — array MUST be sorted by productId first
    static Product binarySearch(Product[] sortedProducts, String productId) {
        int low = 0, high = sortedProducts.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = sortedProducts[mid].productId.compareTo(productId);
            if (cmp == 0) {
                return sortedProducts[mid];
            } else if (cmp < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product("P010", "Bluetooth Speaker", "Electronics"),
                new Product("P003", "Running Shoes", "Footwear"),
                new Product("P007", "Coffee Maker", "Appliances"),
                new Product("P001", "Backpack", "Accessories"),
                new Product("P005", "Desk Lamp", "Home")
        };

        System.out.println("--- Linear Search (unsorted array) ---");
        Product result1 = linearSearch(products, "P007");
        System.out.println("Found: " + result1);

        // Binary search needs a sorted copy
        Product[] sorted = products.clone();
        Arrays.sort(sorted, Comparator.comparing(p -> p.productId));

        System.out.println("\n--- Binary Search (sorted array) ---");
        Product result2 = binarySearch(sorted, "P007");
        System.out.println("Found: " + result2);
    }
}

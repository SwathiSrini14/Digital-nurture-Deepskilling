import java.util.HashMap;
import java.util.Map;

public class Exercise1_InventoryManagement {

    static class Product {
        String productId;
        String productName;
        int quantity;
        double price;

        Product(String productId, String productName, int quantity, double price) {
            this.productId = productId;
            this.productName = productName;
            this.quantity = quantity;
            this.price = price;
        }

        @Override
        public String toString() {
            return "Product{id=" + productId + ", name=" + productName +
                    ", qty=" + quantity + ", price=" + price + "}";
        }
    }

    static class Inventory {
        private Map<String, Product> products = new HashMap<>();

        // O(1) average
        void addProduct(Product p) {
            products.put(p.productId, p);
        }

        // O(1) average
        void updateQuantity(String productId, int newQuantity) {
            Product p = products.get(productId);
            if (p != null) {
                p.quantity = newQuantity;
            } else {
                System.out.println("Product not found: " + productId);
            }
        }

        // O(1) average
        void deleteProduct(String productId) {
            products.remove(productId);
        }

        void printAll() {
            for (Product p : products.values()) {
                System.out.println(p);
            }
        }
    }

    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        inventory.addProduct(new Product("P001", "Laptop", 50, 55000.00));
        inventory.addProduct(new Product("P002", "Mouse", 200, 500.00));
        inventory.addProduct(new Product("P003", "Keyboard", 150, 1200.00));

        System.out.println("Initial Inventory:");
        inventory.printAll();

        inventory.updateQuantity("P002", 180);
        System.out.println("\nAfter updating P002 quantity:");
        inventory.printAll();

        inventory.deleteProduct("P003");
        System.out.println("\nAfter deleting P003:");
        inventory.printAll();
    }
}

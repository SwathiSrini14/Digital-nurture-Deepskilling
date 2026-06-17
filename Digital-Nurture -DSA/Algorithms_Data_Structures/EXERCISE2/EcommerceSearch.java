package Algorithms_Data_Structures.EXERCISE2;

import java.util.*;

public class EcommerceSearch {

    public static Product search(List<Product> products, String target) {

        for (Product p : products) {
            if (p.name.equalsIgnoreCase(target)) {
                return p;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        List<Product> products = new ArrayList<>();

        products.add(new Product(1, "Laptop"));
        products.add(new Product(2, "Phone"));
        products.add(new Product(3, "Headphones"));
        products.add(new Product(4, "Tablet"));

        String searchItem = "Phone";

        Product result = search(products, searchItem);

        if (result != null) {
            System.out.println("Product Found: " + result.name);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
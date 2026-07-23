
import java.util.Arrays;
import java.util.Comparator;

public class Exercise6_LibraryManagement {

    static class Book {
        int bookId;
        String title;
        String author;

        Book(int bookId, String title, String author) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
        }

        @Override
        public String toString() {
            return "Book{id=" + bookId + ", title=" + title + ", author=" + author + "}";
        }
    }

    // Linear search by title: O(n)
    static Book linearSearchByTitle(Book[] books, String title) {
        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title)) {
                return b;
            }
        }
        return null;
    }

    // Binary search by title: O(log n) — books array MUST be sorted by title
    static Book binarySearchByTitle(Book[] sortedBooks, String title) {
        int low = 0, high = sortedBooks.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = sortedBooks[mid].title.compareToIgnoreCase(title);
            if (cmp == 0) {
                return sortedBooks[mid];
            } else if (cmp < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Book[] books = {
                new Book(1, "The Hobbit", "J.R.R. Tolkien"),
                new Book(2, "Clean Code", "Robert C. Martin"),
                new Book(3, "Atomic Habits", "James Clear"),
                new Book(4, "Dune", "Frank Herbert"),
                new Book(5, "1984", "George Orwell")
        };

        System.out.println("--- Linear Search for 'Dune' ---");
        System.out.println(linearSearchByTitle(books, "Dune"));

        Book[] sortedByTitle = books.clone();
        Arrays.sort(sortedByTitle, Comparator.comparing(b -> b.title.toLowerCase()));

        System.out.println("\n--- Binary Search for 'Dune' (sorted by title) ---");
        System.out.println(binarySearchByTitle(sortedByTitle, "Dune"));
    }
}

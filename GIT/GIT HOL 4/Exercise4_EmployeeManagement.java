
import java.util.Arrays;

public class Exercise4_EmployeeManagement {

    static class Employee {
        int employeeId;
        String name;
        String position;
        double salary;

        Employee(int employeeId, String name, String position, double salary) {
            this.employeeId = employeeId;
            this.name = name;
            this.position = position;
            this.salary = salary;
        }

        @Override
        public String toString() {
            return "Employee{id=" + employeeId + ", name=" + name +
                    ", position=" + position + ", salary=" + salary + "}";
        }
    }

    static class EmployeeArray {
        private Employee[] employees;
        private int size;

        EmployeeArray(int capacity) {
            employees = new Employee[capacity];
            size = 0;
        }

        // O(1) amortized if space available, else requires resize (O(n))
        void add(Employee e) {
            if (size == employees.length) {
                employees = Arrays.copyOf(employees, employees.length * 2);
            }
            employees[size++] = e;
        }

        // O(n)
        Employee search(int employeeId) {
            for (int i = 0; i < size; i++) {
                if (employees[i].employeeId == employeeId) {
                    return employees[i];
                }
            }
            return null;
        }

        // O(n)
        void traverse() {
            for (int i = 0; i < size; i++) {
                System.out.println(employees[i]);
            }
        }

        // O(n) — shifting required after removal
        void delete(int employeeId) {
            for (int i = 0; i < size; i++) {
                if (employees[i].employeeId == employeeId) {
                    for (int j = i; j < size - 1; j++) {
                        employees[j] = employees[j + 1];
                    }
                    employees[size - 1] = null;
                    size--;
                    return;
                }
            }
            System.out.println("Employee not found: " + employeeId);
        }
    }

    public static void main(String[] args) {
        EmployeeArray employees = new EmployeeArray(3);

        employees.add(new Employee(1, "Priya", "Developer", 65000));
        employees.add(new Employee(2, "Arun", "Tester", 55000));
        employees.add(new Employee(3, "Kavya", "Manager", 90000));

        System.out.println("--- All Employees ---");
        employees.traverse();

        System.out.println("\n--- Search employeeId=2 ---");
        System.out.println(employees.search(2));

        System.out.println("\n--- Delete employeeId=1 ---");
        employees.delete(1);
        employees.traverse();
    }
}

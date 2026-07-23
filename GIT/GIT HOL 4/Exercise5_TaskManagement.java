
public class Exercise5_TaskManagement {

    static class Task {
        int taskId;
        String taskName;
        String status;

        Task(int taskId, String taskName, String status) {
            this.taskId = taskId;
            this.taskName = taskName;
            this.status = status;
        }

        @Override
        public String toString() {
            return "Task{id=" + taskId + ", name=" + taskName + ", status=" + status + "}";
        }
    }

    static class Node {
        Task task;
        Node next;

        Node(Task task) {
            this.task = task;
        }
    }

    static class TaskLinkedList {
        private Node head;

        // O(1) — insert at head
        void add(Task task) {
            Node newNode = new Node(task);
            newNode.next = head;
            head = newNode;
        }

        // O(n)
        Task search(int taskId) {
            Node current = head;
            while (current != null) {
                if (current.task.taskId == taskId) {
                    return current.task;
                }
                current = current.next;
            }
            return null;
        }

        // O(n)
        void traverse() {
            Node current = head;
            while (current != null) {
                System.out.println(current.task);
                current = current.next;
            }
        }

        // O(n)
        void delete(int taskId) {
            if (head == null) return;
            if (head.task.taskId == taskId) {
                head = head.next;
                return;
            }
            Node current = head;
            while (current.next != null && current.next.task.taskId != taskId) {
                current = current.next;
            }
            if (current.next != null) {
                current.next = current.next.next;
            } else {
                System.out.println("Task not found: " + taskId);
            }
        }
    }

    public static void main(String[] args) {
        TaskLinkedList tasks = new TaskLinkedList();

        tasks.add(new Task(1, "Design UI", "Pending"));
        tasks.add(new Task(2, "Setup Database", "In Progress"));
        tasks.add(new Task(3, "Write Tests", "Pending"));

        System.out.println("--- All Tasks ---");
        tasks.traverse();

        System.out.println("\n--- Search taskId=2 ---");
        System.out.println(tasks.search(2));

        System.out.println("\n--- Delete taskId=1 ---");
        tasks.delete(1);
        tasks.traverse();
    }
}

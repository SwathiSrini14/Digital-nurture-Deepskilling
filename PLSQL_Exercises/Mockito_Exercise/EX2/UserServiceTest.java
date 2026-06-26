import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class UserServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create mock object
        UserRepository mockRepository = mock(UserRepository.class);

        // Create service object
        UserService service = new UserService(mockRepository);

        // Call method
        service.addUser("John");

        // Verify interaction
        verify(mockRepository).saveUser("John");

        // Print output
        System.out.println("saveUser() method called successfully.");
    }
}
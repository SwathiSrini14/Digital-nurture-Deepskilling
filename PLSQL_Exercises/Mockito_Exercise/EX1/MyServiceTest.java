import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testMockingAndStubbing() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Get result
        String result = service.fetchData();

        // Display output
        System.out.println(result);

        // Assertion
        assertEquals("Mock Data", result);
    }
}
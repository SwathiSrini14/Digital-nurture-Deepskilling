import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup executed");
    }

    @Test
    public void testMultiply() {
        // Arrange
        int a = 5;
        int b = 4;

        // Act
        int result = calc.multiply(a, b);

        // Assert
        assertEquals(20, result);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }
}
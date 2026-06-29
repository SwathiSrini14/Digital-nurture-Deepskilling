import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private CountryService service = new CountryService();

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
        return service.getCountry(code);
    }
}
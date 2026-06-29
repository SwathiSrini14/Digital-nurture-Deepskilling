public class CountryService {

    public Country getCountry(String code) {

        if (code.equalsIgnoreCase("IN")) {
            return new Country("IN", "India");
        }

        return new Country("US", "United States");
    }
}
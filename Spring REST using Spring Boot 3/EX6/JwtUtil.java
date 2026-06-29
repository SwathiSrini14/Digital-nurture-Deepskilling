public class JwtUtil {

    public String generateToken(String username) {
        return "sample-jwt-token-for-" + username;
    }
}
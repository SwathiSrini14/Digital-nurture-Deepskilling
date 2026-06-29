import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private JwtUtil jwtUtil = new JwtUtil();

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request) {

        String token =
                jwtUtil.generateToken(request.getUsername());

        return new AuthenticationResponse(token);
    }
}
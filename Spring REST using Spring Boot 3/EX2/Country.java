public class Country {

    private String code;
    private String name;

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void display() {
        System.out.println(code + " - " + name);
    }
}
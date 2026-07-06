public class Loan {

    private int loanId;
    private String loanType;

    public Loan() {
    }

    public Loan(int loanId, String loanType) {
        this.loanId = loanId;
        this.loanType = loanType;
    }

    public int getLoanId() {
        return loanId;
    }

    public void setLoanId(int loanId) {
        this.loanId = loanId;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }
}
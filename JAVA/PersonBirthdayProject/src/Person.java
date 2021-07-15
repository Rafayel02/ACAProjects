public class Person {

    private String name;
    private long birthdayInMillis;
    private boolean birthdayIsSet;

    private int calculateAge() {
        long currentTimeInMillis = System.currentTimeMillis();
        long diff = currentTimeInMillis - this.birthdayInMillis;
        return (int) (((diff / 1000) / 3600) / 24) / 365;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        if (birthdayIsSet) {
            return String.valueOf(calculateAge());
        }
        return "Birthday does not exist!";
    }

    public void setBirthdayInMillis(long birthdayInMillis) {
        if (!birthdayIsSet) {
            this.birthdayInMillis = birthdayInMillis;
            birthdayIsSet = true;
        } else {
            System.out.println("Birthday already exists!");
        }
    }

}

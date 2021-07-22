package com.aca;

public class LinkedIntBuffer extends IntBuffer {

    private LinkedIntBuffer next;

    public LinkedIntBuffer getNext() {
        return next;
    }

    public void setNext(LinkedIntBuffer next) {
        this.next = next;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();

        sb.append(this.getValue())
                .append("->");

        if (this.next != null) {
            sb.append(this.next);
        } else {
            sb.append("null");
            return sb.toString();
        }

        return sb.toString();
    }
}

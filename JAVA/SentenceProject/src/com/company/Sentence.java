package com.company;

public class Sentence {

    private final String[] wordsArray = new String[5];
    private int count = 0;

    public void append(String word) {
        if (count == 5) {
            System.out.println("Array is full!");
            return;
        }
        wordsArray[count] = word;
        count++;
    }

    public String getValue() {
        StringBuilder result = new StringBuilder("");

        for (int i = 0; i < this.count; i++) {
            result.append(wordsArray[i]);
            if (i != this.count - 1) {
                result.append(" ");
                continue;
            }
            result.append(".");
        }

        return result.toString();
    }

    public int getWordsCount() {
        return this.count;
    }

}

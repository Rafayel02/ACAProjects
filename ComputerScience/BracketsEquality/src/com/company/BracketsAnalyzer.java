package com.company;

import java.util.Stack;

public class BracketsAnalyzer {

    public static void main(String[] args) {

        String str = "((((((as(d)as((((d))))asd(a)s))))))";
        if (areBracketsValid(str)) {
            System.out.println("Valid!");
        } else {
            System.out.println("Invalid!");
        }
    }

    private static boolean areBracketsValid(String str) {
        return getRemainder(str) == 0;
    }

    private static int getRemainder(String str) {
        Stack<Integer> stack = new Stack<>();

        for (char ch : str.toCharArray()) {
            if (ch == '(') {
                stack.push(1);
            }
            if (ch == ')') {
                if (stack.size() == 0) {
                    return 1;
                }
                stack.pop();
            }
        }

        return stack.size();
    }
}

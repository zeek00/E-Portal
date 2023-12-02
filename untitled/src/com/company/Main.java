package com.company;

import java.util.Date;

public class Main {
    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
    public static void main(String[] args) {
	// write your code here
        new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000);
        System.out.println(new Date(System.currentTimeMillis()));
        System.out.println(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000));
    }
}

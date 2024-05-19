package com.fullstack.springbootbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with the given id-->"+id);
    }
}

package com.fullstack.springbootbackend.repository;

import com.fullstack.springbootbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}

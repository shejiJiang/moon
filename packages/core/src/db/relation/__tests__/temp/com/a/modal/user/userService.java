package com.a.modal.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 用户信息表 Service
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void page() {
        //System.out.println(userRepository.findAll());
    }

    public void save(User user) {
        //System.out.println(userRepository.save(user));
    }
}

package com.server.User.Entity;

import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@AllArgsConstructor
public class CustomUserDetails implements UserDetails {
    private final User user;

    @Override
    public String getPassword() {return  user.getPassword();}

    @Override
    public String getUsername() {return user.getUsername();}

    /* 계정 만료 여부     *  true : 만료 안됨     *  false : 만료     */
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /* 계정 잠김 여부     *  true : 잠기지 않음     *  false : 잠김     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /* 비밀번호 만료 여부     *  true : 만료 안됨     *  false : 만료     */
    @Override
    public boolean isEnabled() {
        return true;
    }

    /* 유저의 권한 목록 */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collectors = new ArrayList<>();

        collectors.add(() -> "ROLE_"+user.getRole());

        return collectors;
    }
}

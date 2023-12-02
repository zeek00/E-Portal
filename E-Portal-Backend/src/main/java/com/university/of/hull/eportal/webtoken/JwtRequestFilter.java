package com.university.of.hull.eportal.webtoken;


import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.university.of.hull.eportal.serviceimpl.EclubUserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


@Component
public class JwtRequestFilter extends OncePerRequestFilter{

    @Autowired
    private EclubUserDetailsServiceImpl myUserDetailsSrvice;

    @Autowired
    private JwtUtil jwtutil;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {

        final String AuthorizationHeader = request.getHeader("Authorization");


        String username = null;
        String jwt = null;
        if (AuthorizationHeader != null && AuthorizationHeader.startsWith("Bearer ")) {
            jwt = AuthorizationHeader.substring(7);
            username = jwtutil.getUsernameFromToken(jwt);
        }


        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.myUserDetailsSrvice.loadUserByUsername(username);

            if (jwtutil.validateToken(jwt, userDetails)) {


                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

            }



        }
        chain.doFilter(request, response);
    }

}

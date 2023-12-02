package com.university.of.hull.eportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.university.of.hull.eportal.dataentity.Subscription;

public interface SubscriptionRepository  extends JpaRepository<Subscription, Integer>{

	List<Subscription> findByUserId(long userId);

}

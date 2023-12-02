package com.university.of.hull.eportal.serviceimpl;

import com.university.of.hull.eportal.datamodel.Mail;
import com.university.of.hull.eportal.datamodel.events.CreateEventRequest;
import com.university.of.hull.eportal.datamodel.events.FetchEventResponse;
import com.university.of.hull.eportal.repository.ClubRepository;
import com.university.of.hull.eportal.repository.EventRepository;
import com.university.of.hull.eportal.repository.SubscriptionRepository;
import com.university.of.hull.eportal.service.GeneralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.university.of.hull.eportal.dataentity.Clubs;
import com.university.of.hull.eportal.dataentity.Events;
import com.university.of.hull.eportal.dataentity.Subscription;
import com.university.of.hull.eportal.dataentity.Users;
import com.university.of.hull.eportal.datamodel.login.LoginRequest;
import com.university.of.hull.eportal.datamodel.signup.SignUpResponse;
import com.university.of.hull.eportal.datamodel.signup.UserSignUpRequest;
import com.university.of.hull.eportal.extradata.Roles;
import com.university.of.hull.eportal.extradata.Status;
import com.university.of.hull.eportal.repository.UsersRepository;
import com.university.of.hull.eportal.service.UserService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UsersRepository usersRepository;

	@Autowired
	ClubRepository clubRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private SubscriptionRepository subscriptionRepository;

	@Autowired
	private EventRepository eventRepository;

	@Autowired
	private GeneralService generalService;

	@Override
	public SignUpResponse signUpUser(UserSignUpRequest signUpRequest) {
		SignUpResponse signUpResponse = new SignUpResponse();
		
		Users userSignUp = new Users();
		userSignUp.setFirstName(signUpRequest.getFirstName());
		userSignUp.setLastName(signUpRequest.getLastName());
		userSignUp.setPreferredName(signUpRequest.getPreferredName());
		userSignUp.setGender(signUpRequest.getGender());
		userSignUp.setDateOfBirth(signUpRequest.getDateOfBirth());
		userSignUp.setCountry(signUpRequest.getCountry());
		userSignUp.setState(signUpRequest.getState());
		userSignUp.setZipCode(signUpRequest.getZipCode());
		userSignUp.setEmailAddress(signUpRequest.getEmailAddress());
		userSignUp.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
		userSignUp.setPhoneNumber(signUpRequest.getPhoneNumber());
		userSignUp.setUserRole(Roles.Member);
		userSignUp.setUserStatus(Status.Active);
		if (usersRepository.findByEmailAddress(signUpRequest.getEmailAddress()) == null) {
			Users users = usersRepository.save(userSignUp);
			if (users != null) {
				generalService.sendMailMessage(signUpRequest.getEmailAddress(),"Welcome to eClub", "Thank you for registering with eClub portal");
				signUpResponse.setMessage("User Created Succesfully");
			}
		}else {
			signUpResponse.setMessage("Email registered to an existing user! Please use new email");
			throw new RuntimeException("Email registered to an existing user! Please use new email");

		}
		return signUpResponse;
	}

	@Override
	public FetchEventResponse fetchEventByUserId(Long userId) {
		FetchEventResponse fetchEventResponse = new FetchEventResponse();
		Users users = usersRepository.findByUserId(userId);
		if (users != null) {
			List<CreateEventRequest> createEventRequests = new ArrayList<CreateEventRequest>();
			List<Subscription> subscriptions = subscriptionRepository.findByUserId(userId);
			if (!subscriptions.isEmpty()) {
				for (Subscription sub : subscriptions) {
					Clubs club = clubRepository.findByClubId(sub.getClubId());
					if (club != null) {
						List<Events> events = eventRepository.findByClubId(sub.getClubId());
						if (!events.isEmpty()) {
							for (Events event : events) {
								CreateEventRequest eventResp = new CreateEventRequest();
								eventResp.setEventId(event.getId());
								eventResp.setTitle(event.getTitle());
								eventResp.setDescription(event.getDescription());
								eventResp.setClubId(event.getClub().getClubId());
								eventResp.setAvailableSeats(event.getAvailableSeats());
								eventResp.setCost(event.getCost());
								eventResp.setLocation(event.getLocation());
								eventResp.setStartDateAndTime(event.getStartDateAndTime());
								eventResp.setEndDateAndTime(event.getEndDateAndTime());
								eventResp.setImgVidPath(event.getImgVidPath());
								createEventRequests.add(eventResp);
							}
						} else {
							fetchEventResponse.setMessage("Event does not exists, Please supply proper user id");
							throw new RuntimeException("Event does not exists, Please supply proper user id");
						}
					} else {
						fetchEventResponse.setMessage("Club does not exists, Please supply proper user id");
						throw new RuntimeException("Club does not exists, Please supply proper user id");
					}
				}	
			} else {
				fetchEventResponse.setMessage("Subscription does not exists, Please supply proper usser id");
				throw new RuntimeException("Subscription does not exists, Please supply proper usser id");
			}
			fetchEventResponse.setEventList(createEventRequests);
			fetchEventResponse.setMessage("Events fetched succesfully");
		} else {
			fetchEventResponse.setMessage("User does not exists, Please supply proper usser id");
			throw new RuntimeException("User does not exists, Please supply proper usser id");
		}
		return fetchEventResponse;
	}



}

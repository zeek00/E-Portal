package com.university.of.hull.eportal.restcontroller;

import org.springframework.http.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.university.of.hull.eportal.datamodel.ApiResponse;
import com.university.of.hull.eportal.datamodel.events.CreateEventRequest;
import com.university.of.hull.eportal.datamodel.events.CreateEventResponse;
import com.university.of.hull.eportal.datamodel.events.FetchEventResponse;
import com.university.of.hull.eportal.datamodel.events.FileUploadResponse;
import com.university.of.hull.eportal.datamodel.signup.ClubSignUpRequest;
import com.university.of.hull.eportal.datamodel.signup.FetchClubsResponse;
import com.university.of.hull.eportal.datamodel.signup.SignUpResponse;
import com.university.of.hull.eportal.service.ClubService;
import com.university.of.hull.eportal.service.UserService;
import com.university.of.hull.eportal.serviceimpl.EclubUserDetailsServiceImpl;
import com.university.of.hull.eportal.webtoken.JwtUtil;

@RestController
@RequestMapping(value = "/e-portal")
public class ClubController {

	@Autowired
	ClubService clubService;

	@Autowired
	private AuthenticationManager authenticationmanager;

	@Autowired
	private EclubUserDetailsServiceImpl userDetailsService;

	@Autowired
	UserService userService;

	@Autowired
	private JwtUtil jwttokenutil;

	private final Path imageStorageDir = Paths.get("../E-Portal-Backend/images/");

	private static final Logger logger = LoggerFactory.getLogger(ClubController.class);

	@PostMapping(value = "/clubsignup")
	public ApiResponse<String> clubSignUp(@RequestBody ClubSignUpRequest clubSignUpRequest) {
		ApiResponse<String> apiResponse = new ApiResponse<>();
		SignUpResponse signUpResponse = clubService.clubSignUp(clubSignUpRequest);
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(signUpResponse.getMessage());
		return apiResponse;
	}

	@PostMapping(value = "/createevent")
	public ApiResponse<String> createEvent(@RequestBody CreateEventRequest createEventRequest) {
		ApiResponse<String> apiResponse = new ApiResponse<>();
		CreateEventResponse createEventResponse = clubService.createEvent(createEventRequest);
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(createEventResponse.getMessage());
		return apiResponse;
	}

	@GetMapping(value = "/fetcheventbyeventid")
	public ApiResponse<FetchEventResponse> fetchEventByEventId(@RequestParam(name = "eventId") Long eventId) {
		ApiResponse<FetchEventResponse> apiResponse = new ApiResponse<>();
		FetchEventResponse fetchEventResponse = clubService.fetchEventByEventId(eventId);
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(fetchEventResponse);
		return apiResponse;
	}

	@GetMapping(value = "/fetcheventbyclubid")
	public ApiResponse<FetchEventResponse> fetchEventByClubId(@RequestParam(name = "clubId") String clubId) {
		ApiResponse<FetchEventResponse> apiResponse = new ApiResponse<>();
		FetchEventResponse fetchEventResponse = clubService.fetchEventByClubId(clubId);
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(fetchEventResponse);
		return apiResponse;
	}

	@GetMapping(value = "/fetchclubs")
	public ApiResponse<FetchClubsResponse> fetchClubs() {
		ApiResponse<FetchClubsResponse> apiResponse = new ApiResponse<>();
		FetchClubsResponse fetchClubsResponse = clubService.fetchClubs();
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(fetchClubsResponse);
		return apiResponse;
	}

	@PostConstruct
	public void ensureDirectoryExists() throws IOException {
		if (!Files.exists(this.imageStorageDir)) {
			Files.createDirectories(this.imageStorageDir);
		}
	}

	@PostMapping(value = "/uploadimage")
	public ApiResponse<FileUploadResponse> uploadImage(@RequestBody MultipartFile imageFile,
			@RequestParam("name") String name) throws IOException {
		ApiResponse<FileUploadResponse> apiResponse = new ApiResponse<>();
		final Path targetPath = this.imageStorageDir.resolve(name);
		try (InputStream in = imageFile.getInputStream()) {
			try (OutputStream out = Files.newOutputStream(targetPath, StandardOpenOption.CREATE)) {
				//(InputStream)in.transferTo(out);
				byte[] buf = new byte[8192];
				int length;
				while ((length = in.read(buf)) > 0) {
					out.write(buf, 0, length);
				}
			}
		}
		targetPath.toAbsolutePath().toString();
		File file = new File(targetPath.toString());
		FileUploadResponse fileUploadResponse = new FileUploadResponse();
		fileUploadResponse.setImagePath(file.getCanonicalPath().toString());
		fileUploadResponse.setMessage("File uploaded successfully");
		apiResponse.setMessage("Success");
		apiResponse.setResponsecode("00");
		apiResponse.setStatus(HttpStatus.OK);
		apiResponse.setResponse(fileUploadResponse);
		return apiResponse;
	}
}

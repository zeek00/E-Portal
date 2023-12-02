package com.university.of.hull.eportal.datamodel.events;

import com.university.of.hull.eportal.datamodel.Message;

public class FileUploadResponse extends Message {
	
	private String imagePath;

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

}

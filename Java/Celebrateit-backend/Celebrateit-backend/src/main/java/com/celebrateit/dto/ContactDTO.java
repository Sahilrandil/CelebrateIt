package com.celebrateit.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContactDTO {
	private Integer contactId;
    private String name;
    private String email;
    private String mobile;
    private String message;

}
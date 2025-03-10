package com.celebrateit.dto;

import java.time.LocalDate;
import com.celebrateit.pojo.BookingStatus;
import com.celebrateit.pojo.PaymentMethod;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor

public class BookingsRequestDTO {
	    private Integer bookingid;
	    private String eventLocation;
	    private String pinCode;
	    private LocalDate eventdate;
	    private String eventdetails;
	    private Double totalPrice;
	    private BookingStatus bookingstatus;
	    private PaymentMethod paymentmethod;
	    private int userid;
	    private int serviceid;
	    private int categorieid;
}

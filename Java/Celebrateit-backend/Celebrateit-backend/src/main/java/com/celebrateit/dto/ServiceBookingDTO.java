package com.celebrateit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ServiceBookingDTO {
    private Integer bookingid;
    private String eventdetails;
    private String eventdate;
    private Double totalPrice;
    private Double advancepayment;
    private String paymentmethod;  // Enum as String
    private String paymentstatus;  // Enum as String
    private String bookingstatus;  // Enum as String
}

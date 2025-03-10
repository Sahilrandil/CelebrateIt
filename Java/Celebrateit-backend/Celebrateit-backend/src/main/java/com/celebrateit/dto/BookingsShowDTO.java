package com.celebrateit.dto;

import java.time.LocalDate;
import com.celebrateit.pojo.BookingStatus;
import lombok.Data; 

@Data
public class BookingsShowDTO {

    private Integer bookingid;
    private String eventLocation;
    private String pinCode;
    private LocalDate eventdate;
    private String eventdetails;
    private Integer quantity;
    private Double totalPrice;
    private BookingStatus bookingstatus;
    
    private String stitle;
    private Double sbasePrice;
    private Double sdiscount;
    private String simage;
    
    private String uName;
    private String uemail;
    private String ucontact_number;
    
    private String bcategoryname;

    public BookingsShowDTO() {
        // Default constructor
    }
}

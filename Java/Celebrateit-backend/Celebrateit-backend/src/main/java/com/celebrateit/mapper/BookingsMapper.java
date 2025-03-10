package com.celebrateit.mapper;


import com.celebrateit.dto.BookingsRequestDTO;
import com.celebrateit.pojo.Bookings;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class BookingsMapper {

    private final ModelMapper modelMapper = new ModelMapper();

    public BookingsRequestDTO toDto(Bookings bookings) {
        return modelMapper.map(bookings, BookingsRequestDTO.class);
    }

    public Bookings toEntity(BookingsRequestDTO bookingDto) {
        return modelMapper.map(bookingDto, Bookings.class);
    }
}


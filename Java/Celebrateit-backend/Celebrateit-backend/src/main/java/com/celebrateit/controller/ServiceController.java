//package com.celebrateit.controller;
//
//import com.celebrateit.dto.ApiResponse;
//import com.celebrateit.dto.ServiceRequestDTO;
//import com.celebrateit.dto.ServiceResponseDTO;
//import com.celebrateit.pojo.Services;
//import com.celebrateit.service.ServiceService;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//
//@RestController
//@RequestMapping("/services")
//@CrossOrigin(value = {"http://localhost:3000/"})
//public class ServiceController {
//
//    @Autowired
//    private ServiceService serviceService;
//
//    @PostMapping("/add")
//    public ResponseEntity<?> addService(@RequestBody ServiceRequestDTO serviceRequestDTO) {
//        return ResponseEntity.status(HttpStatus.CREATED).body(serviceService.addService(serviceRequestDTO));
//    }
//   
//    @DeleteMapping("/{serviceId}")
//    public ResponseEntity<?> deleteServiceDetails(@PathVariable Integer serviceId){
//    	System.out.println("in delete service " + serviceId);
//		try {
//			return ResponseEntity.ok(serviceService.deleteServiceDetails(serviceId));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
//		}
//    	
//    }
//    
//    @GetMapping("/{serviceId}")
//    public ResponseEntity<?> getServiceDetailsById(@PathVariable Integer serviceId){
//    	System.out.println("in get service " + serviceId);
//    	try {
//			return ResponseEntity.ok(serviceService.getServiceDetailsById(serviceId));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//					new ApiResponse(e.getMessage()));
//		}
//    	
//    }
//    
//    
//    //update
//    @PutMapping("/{serviceId}")
//    public ResponseEntity<?> updateServiceDetailsById(@PathVariable Integer serviceId,
//    		@RequestBody Services services)
//    	{
//    		System.out.println("in update category "+serviceId+" "+services);
//    		try {
//    			return ResponseEntity.ok(
//    					serviceService.updateServiceDetailsById(serviceId,services));
//    		} catch (RuntimeException e) {
//    			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//    					new ApiResponse(e.getMessage()));
//    		}
//    	}
//    
//
//}

package com.celebrateit.controller;

import com.celebrateit.dto.ApiResponse;
import com.celebrateit.dto.ServiceRequestDTO;
import com.celebrateit.dto.ServiceResponseDTO;
import com.celebrateit.pojo.Services;
import com.celebrateit.service.ServiceService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/services")
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @PostMapping("/add")
    public ResponseEntity<?> addService(@RequestBody ServiceRequestDTO serviceRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(serviceService.addService(serviceRequestDTO));
    }
   
    @DeleteMapping("/{serviceId}")
    public ResponseEntity<?> deleteServiceDetails(@PathVariable Integer serviceId) {
        if (serviceId == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid service ID");
        }

        System.out.println("Received DELETE request for service ID: " + serviceId);

        try {
            return ResponseEntity.ok(serviceService.deleteServiceDetails(serviceId));
        } catch (RuntimeException e) {
            System.err.println("Error deleting service: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service not found");
        }
    }

    @GetMapping("/{serviceId}")
    public ResponseEntity<?> getServiceDetailsById(@PathVariable Integer serviceId) {
        System.out.println("in get service " + serviceId);
        try {
            return ResponseEntity.ok(serviceService.getServiceDetailsById(serviceId));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }
    
//    @PutMapping("/{serviceId}")
//    public ResponseEntity<?> updateServiceDetailsById(@PathVariable Integer serviceId, @RequestBody Services services) {
//        System.out.println("in update service " + serviceId + " " + services);
//        try {
//            return ResponseEntity.ok(serviceService.updateServiceDetailsById(serviceId, services));
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
//        }
//    }
    
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getServicesByCategoryId(@PathVariable Integer categoryId) {
        try {
            return ResponseEntity.ok(serviceService.getServicesByCategoryId(categoryId));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }
    
    
    //update
    @PutMapping("/{serviceId}")
    public ResponseEntity<?> updateServiceDetailsById(@PathVariable Integer serviceId, @RequestBody ServiceRequestDTO serviceRequestDTO) {
        System.out.println("Updating service: " + serviceId);

        try {
            ServiceResponseDTO updatedService = serviceService.updateServiceDetailsById(serviceId, serviceRequestDTO);
            return ResponseEntity.ok(updatedService);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }
}




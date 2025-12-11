package com.project.event.controller;

import com.project.event.model.Guest;
import com.project.event.service.GuestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/guests")
public class GuestController {

    private final GuestService service;

    public GuestController(GuestService service) {
        this.service = service;
    }

    // Add Guest
    @PostMapping
    public Guest addGuest(@RequestBody Map<String, Object> body) {

        String name = (String) body.get("name");
        String email = (String) body.get("email");
        String phone = (String) body.get("phone");

        Long eventId = body.get("eventId") != null ?
                Long.valueOf(body.get("eventId").toString()) : null;

        return service.addGuest(name, email, phone, eventId);
    }

    // Get all guests
    @GetMapping
    public List<Guest> getGuests() {
        return service.getAllGuests();
    }

    // Get guest by ID
    @GetMapping("/{id}")
    public Guest getGuest(@PathVariable Long id) {
        return service.getGuestById(id);
    }

    // Update guest
    @PutMapping("/{id}")
    public Guest updateGuest(@PathVariable Long id, @RequestBody Map<String, Object> body) {

        String name = (String) body.get("name");
        String email = (String) body.get("email");
        String phone = (String) body.get("phone");

        Long eventId = body.get("eventId") != null ?
                Long.valueOf(body.get("eventId").toString()) : null;

        return service.updateGuest(id, name, email, phone, eventId);
    }

    // Delete guest
    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable Long id) {
        service.deleteGuest(id);
    }
}

package com.project.event.service;

import com.project.event.model.Event;
import com.project.event.model.Guest;
import com.project.event.repository.EventRepository;
import com.project.event.repository.GuestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestService {

    private final GuestRepository guestRepo;
    private final EventRepository eventRepo;

    public GuestService(GuestRepository guestRepo, EventRepository eventRepo) {
        this.guestRepo = guestRepo;
        this.eventRepo = eventRepo;
    }

    // Add new guest
    public Guest addGuest(String name, String email, String phone, Long eventId) {

        Event event = null;
        if (eventId != null) {
            event = eventRepo.findById(eventId).orElse(null);
        }

        Guest guest = new Guest(name, email, phone, event);
        return guestRepo.save(guest);
    }

    // Get all guests
    public List<Guest> getAllGuests() {
        return guestRepo.findAll();
    }

    // Get single guest
    public Guest getGuestById(Long id) {
        return guestRepo.findById(id).orElse(null);
    }

    // Update guest
    public Guest updateGuest(Long id, String name, String email, String phone, Long eventId) {

        Guest guest = guestRepo.findById(id).orElse(null);
        if (guest == null) return null;

        guest.setName(name);
        guest.setEmail(email);
        guest.setPhone(phone);

        // Update event
        if (eventId != null) {
            Event event = eventRepo.findById(eventId).orElse(null);
            guest.setEvent(event);
        } else {
            guest.setEvent(null);
        }

        return guestRepo.save(guest);
    }

    // Delete guest
    public void deleteGuest(Long id) {
        guestRepo.deleteById(id);
    }
}


package com.project.event.service;

import com.project.event.repository.EventRepository;
import com.project.event.repository.GuestRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class DashboardService {

    private final EventRepository eventRepo;
    private final GuestRepository guestRepo;

    public DashboardService(EventRepository eventRepo, GuestRepository guestRepo) {
        this.eventRepo = eventRepo;
        this.guestRepo = guestRepo;
    }

    public long getTotalEvents() {
        return eventRepo.countAllEvents();
    }

    public long getTotalGuests() {
        return guestRepo.count();
    }

    public long getUpcomingEvents() {
        String today = LocalDate.now().toString();
        return eventRepo.countUpcomingEvents(today);
    }

    public long getCompletedEvents() {
        String today = LocalDate.now().toString();
        return eventRepo.countCompletedEvents(today);
    }
}

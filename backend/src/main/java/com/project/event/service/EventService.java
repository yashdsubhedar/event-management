package com.project.event.service;

import com.project.event.model.Event;
import com.project.event.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    // CREATE
    public Event create(Event event) {
        return repo.save(event);
    }

    // READ ALL
    public List<Event> getAll() {
        return repo.findAll();
    }

    // READ ONE
    public Event getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // UPDATE
    public Event update(Long id, Event updated) {
        Event existing = repo.findById(id).orElse(null);
        if (existing == null) return null;

        existing.setTitle(updated.getTitle());
        existing.setDate(updated.getDate());
        existing.setTime(updated.getTime());
        existing.setVenue(updated.getVenue());

        return repo.save(existing);
    }

    // DELETE
    public void delete(Long id) {
        repo.deleteById(id);
    }
}

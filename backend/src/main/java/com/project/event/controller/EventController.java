package com.project.event.controller;

import com.project.event.model.Event;
import com.project.event.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService service;

    public EventController(EventService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return service.create(event);
    }

    // GET ALL
    @GetMapping
    public List<Event> getAllEvents() {
        return service.getAll();
    }

    // GET ONE
    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id) {
        return service.getById(id);
    }

    // UPDATE (IMPORTANT)
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event) {
        return service.update(id, event);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {
        service.delete(id);
        return "Deleted";
    }
}


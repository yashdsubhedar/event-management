package com.project.event.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "guests")
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    // Return event in JSON, but ignore event.guests to avoid infinite loop
    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonIgnoreProperties("guests")
    private Event event;

    public Guest() {}

    public Guest(String name, String email, String phone, Event event) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.event = event;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Event getEvent() { return event; }
    public void setEvent(Event event) { this.event = event; }
}

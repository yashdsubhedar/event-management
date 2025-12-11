package com.project.event.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Table(name = "events")
@JsonIgnoreProperties("guests")   // 🔥 stops sending guests list but keeps event info
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String date;
    private String time;
    private String venue;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("event")   // 🔥 avoid recursion Guest.event.event...
    private List<Guest> guests;

    public Event() {}

    public Event(String title, String date, String time, String venue) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.venue = venue;
    }

    // getters + setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getVenue() { return venue; }
    public void setVenue(String venue) { this.venue = venue; }

    public List<Guest> getGuests() { return guests; }
    public void setGuests(List<Guest> guests) { this.guests = guests; }
}


package com.project.event.repository;

import com.project.event.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EventRepository extends JpaRepository<Event, Long> {

    @Query("SELECT COUNT(e) FROM Event e")
    long countAllEvents();

    @Query("SELECT COUNT(g) FROM Guest g")
    long countAllGuests();

    @Query("SELECT COUNT(e) FROM Event e WHERE e.date >= :today")
    long countUpcomingEvents(String today);

    @Query("SELECT COUNT(e) FROM Event e WHERE e.date < :today")
    long countCompletedEvents(String today);
}

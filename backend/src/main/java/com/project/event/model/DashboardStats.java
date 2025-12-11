package com.project.event.model;

public class DashboardStats {

    private long totalEvents;
    private long totalGuests;
    private long upcoming;
    private long completed;

    public DashboardStats(long totalEvents, long totalGuests, long upcoming, long completed) {
        this.totalEvents = totalEvents;
        this.totalGuests = totalGuests;
        this.upcoming = upcoming;
        this.completed = completed;
    }

    public long getTotalEvents() {
        return totalEvents;
    }

    public long getTotalGuests() {
        return totalGuests;
    }

    public long getUpcoming() {
        return upcoming;
    }

    public long getCompleted() {
        return completed;
    }
}

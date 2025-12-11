package com.project.event.controller;

import com.project.event.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboardStats() {
        DashboardResponse res = new DashboardResponse();
        res.totalEvents = dashboardService.getTotalEvents();
        res.totalGuests = dashboardService.getTotalGuests();
        res.upcoming = dashboardService.getUpcomingEvents();
        res.completed = dashboardService.getCompletedEvents();
        return res;
    }

    public static class DashboardResponse {
        public long totalEvents;
        public long totalGuests;
        public long upcoming;
        public long completed;
    }
}

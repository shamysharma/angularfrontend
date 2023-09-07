// src/app/leave-table/leave-table.component.ts
import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave.model';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrls: ['./leave-table.component.css'],
})
export class LeaveTableComponent implements OnInit {
  leaveData: Leave[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit() {
    this.loadLeaveData();
  }

  loadLeaveData() {
    this.leaveService.getLeaves().subscribe((data) => {
      this.leaveData = data;
    });
  }
}

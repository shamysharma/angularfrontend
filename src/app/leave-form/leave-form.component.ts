// src/app/leave-form/leave-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Leave } from '../leave.model';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css'],
})
export class LeaveFormComponent {
  leaveForm: FormGroup;

  constructor(private fb: FormBuilder, private leaveService: LeaveService) {
    this.leaveForm = this.fb.group({
      name: ['', Validators.required],
      leave_type: ['', Validators.required],
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      team_name: ['', Validators.required],
      reporter: ['', Validators.required],
      sick_leaves_file: [''], // You can add file handling logic here if needed
    });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      const leaveData: Leave = this.leaveForm.value;
      this.leaveService.postLeave(leaveData).subscribe((response) => {
        console.log('Leave request submitted successfully', response);
        // Clear the form after submission if needed
        this.leaveForm.reset();
      });
    } else {
      // Handle form validation errors
    }
  }
}

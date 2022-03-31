import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();
 
  tyMessageShow: boolean = false; 

  profileForm = this.formBuilder.group({
    name: [''],
    email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
    title: [''],
    message: ['']
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.profileForm.valid) {
      setTimeout(() => {
        this.tyMessageShow = true;
      }, 500);
      setTimeout(() => {
        this.closeForm.emit(true);
      }, 1500);
      setTimeout(() => {
        this.resetForm();
      }, 2000)
     
      return
    }
    
  }

  close() {
    this.closeForm.emit(true);
    this.resetForm();
  }

  resetForm() {
    this.profileForm.reset();
    this.tyMessageShow = false;
  }

}

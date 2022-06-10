import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formValue !: FormGroup;
  
  constructor(private formbuilder:FormBuilder) { }
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  MOBILE_PATTERN = "^((\\+91-?)|0)?[0-9]{10}$"

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      CompanyName:new FormControl('',[Validators.required]),
      CompanyPAN:new FormControl('',[Validators.required]),
      CompanyGST:new FormControl('',[Validators.required]),
      ContactPerson:new FormControl('',[Validators.required]),
      CompanyEmail:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      ContactNo:new FormControl('',[Validators.required,Validators.pattern(this.MOBILE_PATTERN)]),
  })
  }
onSubmit() {
  console.log('company:',  this.formValue.value);
  this.formValue.reset();
}
get CompanyName()
{
  return this.formValue.get('CompanyName')
}
get CompanyPAN()
{
  return this.formValue.get('CompanyPAN')
}
get CompanyGST()
{
  return this.formValue.get('CompanyGST')
}
get  ContactPerson()
{
  return this.formValue.get('ContactPerson')
}
get CompanyEmail()
{
  return this.formValue.get('CompanyEmail')
}
get  Password()
{
  return this.formValue.get('Password')
}
get ContactNo()
{
  return this.formValue.get('ContactNo')
}
}

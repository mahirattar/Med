import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-utilisateur-create',
  templateUrl: './utilisateur-create.component.html',
  styleUrls: ['./utilisateur-create.component.css']
})

export class UtilisateurCreateComponent implements OnInit {  
  submitted = false;
  utilisateurForm: FormGroup;
  UtilisateurProfile:any = ['Homme', 'Femme']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.utilisateurForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      sexe: ['', [Validators.required]],
      poids: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      taille: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose sexe with select dropdown
  updateProfile(e){
    this.utilisateurForm.get('sexe').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.utilisateurForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.utilisateurForm.valid) {
      return false;
    } else {
      this.apiService.createUtilisateur(this.utilisateurForm.value).subscribe(
        (res) => {
          console.log('Utilisateur successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/utilisateurs-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}

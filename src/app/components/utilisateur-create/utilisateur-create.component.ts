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

changes(): void {
  this.calcBMI();
  this.categorize();
  console.log(this.utilisateurForm.value.name)
}

calcBMI(){
  var imc = 0;
  if (this.utilisateurForm.value.taille != ''){
  imc = (this.utilisateurForm.value.poids/Math.pow(this.utilisateurForm.value.taille/100,2));};

  return imc.toFixed(2);
}

categorize(){
  var imc=(this.utilisateurForm.value.poids/Math.pow(this.utilisateurForm.value.taille/100,2));
  var category = '?';
  if (this.utilisateurForm.value.taille != ''){
  if(imc<16){ category="Anorexie ou dénutrition";} 
  else if(imc>16.5 && imc<18.5) {category="Maigreur";}
  else if(imc>18.5 && imc<25) {category="Corpulence normale";}
  else if(imc>25 && imc<30) {category="Surpoids";}
  else if(imc>30 && imc<35) {category="Obésité modérée (Classe 1)";}
  else if(imc>35 && imc<40) {category="Obésité élevé (Classe 2)";}
  else if(imc>40) {category="Obésite morbide ou massive";};}
 
 return category;
 }
    
  

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})

export class UtilisateurListComponent implements OnInit {
  
  Utilisateur:any = [];

  constructor(private apiService: ApiService) { 
    this.readUtilisateur();
  }

  ngOnInit() {}

  readUtilisateur(){
    this.apiService.getUtilisateurs().subscribe((data) => {
     this.Utilisateur = data;
    })    
  }

  removeUtilisateur(utilisateur, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUtilisateur(utilisateur._id).subscribe((data) => {
          this.Utilisateur.splice(index, 1);
        }
      )    
    }
  }

}
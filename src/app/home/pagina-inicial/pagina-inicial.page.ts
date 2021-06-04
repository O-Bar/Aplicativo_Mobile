import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Remedio, RemedioService } from 'src/app/services/remedio.service';


@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  ngOnInit() {
  }

  public remedios: Remedio[];


  constructor(private remdioService: RemedioService,
     private afa: AngularFireAuth,
     private router: Router
     ) {
    this.remedios = this.remdioService.allRemedios;
   }


  public async logout(){
    await this.afa.signOut();
    this.router.navigateByUrl('/login')

  }

}

import { Component } from '@angular/core';
import { FeedService } from 'Services/FeedServices';import { NgModule } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent{
  firstname: string = 'Anderson';
  lastName: string = 'damasceno';
  email: string = 'dinhomelo_17@hotmail.com';


  constructor(private FeedService: FeedService) { }

  pesquisarPorEmail() {
    if (this.email) {
      this.FeedService.pesquisarPorEmail(this.email).subscribe(
        (response) => {
          console.log('Resposta da solicitação:', response);

          this.firstname;
          this.lastName;
        },
        (error) => {
          console.error('Erro na solicitação:', error);
        }
      );
    } else {
      console.warn('Por favor, insira um email válido.');
    }
  }
  deletarPorEMail() {
    if (this.email) {
      this.FeedService.deletarPorEMail(this.email).subscribe(
      (response) => {
        console.log('Feed deletado com sucesso', response);
      },
      (error) => {
        console.error('Erro ao deletar o feed', error)
      }
      );
    } else {
     console.warn('Por favor, insira um email válido para excluir.');
    }

  }

}

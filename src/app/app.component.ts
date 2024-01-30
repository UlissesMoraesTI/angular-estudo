import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public state = 'initial';
  public person: any;
  public location: any;

  endereco: any;
  cep = '';

  constructor(private http: HttpClient) { }

  search() {

    //this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
    //  .subscribe((res) => {
    //    this.endereco = res;
    //  });
    //
    //console.log("clicou em search");

    this.http.get(`https://randomuser.me/api/`)
      .subscribe((response: any) => {
        const [person] = response.results;
        this.person = person;

        this.state = 'ok';
        console.log(this.person);
      }, (dadosErro) => {

        this.state = 'error';
        console.error('DEU RUIM:', dadosErro)
      });

    console.log("depois do subscribe");
  }



}

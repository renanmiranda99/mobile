import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss'],
})
export class ListaPaisesComponent implements OnInit {
  countries$: Observable<any> = new Observable<any>();

  constructor(private dataService: DataService) {}

  paises: any = null;

  ngOnInit(): void {
    this.countries$ = this.dataService.getAllCountries();

    this.countries$.subscribe({
      next: (data: any) => {
        console.log(data)
        this.paises = data.sort((a: any, b: any) =>
          a.name.official.localeCompare(b.name.official)
        );
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}

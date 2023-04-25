import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(private servicioLugares: PlacesService){}

  onQueryChange(query: string = ''){
    // console.log(query);

    if(this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.servicioLugares.getPlacesByQuery(query);
      console.log('Mandar este query: ', query);
      
    }, 500);
    
  }
}

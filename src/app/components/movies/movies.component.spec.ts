import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../../services/api.service';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from '@angular/common/http';
import { render } from '@testing-library/angular';
import{ IMovie,} from 'src/app/models/Movie.model';


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [HttpClientModule], // Agregamos el módulo HttpClientModule a los imports
      providers: [ApiService], // Agregamos el servicio ApiService a los providers
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the container correctly', () => {
    expect(component).toBeTruthy();
  });
});


describe('MoviesComponent', () => {
  it('should create the component', async () => {
    const { fixture } = await render(MoviesComponent, {
      imports: [HttpClientModule],
    });

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the container correctly', async () => {
    const { fixture, getByTestId } = await render(MoviesComponent, {
      imports: [HttpClientModule],
    });

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();

    // Usamos Testing Library para obtener el elemento del contenedor mediante el atributo 'data-testid'
    const containerElement = getByTestId('movies-container');
    expect(containerElement).toBeTruthy();
    expect(containerElement.children.length).toBeGreaterThan(0); 
    // Verificamos que el contenedor tenga hijos renderizados
  });

  it('should display movie titles', async () => {
  
    // Podemos utilizar Testing Library para verificar que los títulos de las películas se muestren correctamente.

    const movieData = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];
    const movie = {  
      title: 'Example Movie', 
      director: 'John Doe', 
      releaseYear: 2022 
    };
  
    // Renderiza el componente usando una plantilla HTML y pasando 'movie' como propiedad del componente
    const { fixture, getByText } = await render(`
      <app-movies [movies]="movies"></app-movies>
    `, {
      imports: [HttpClientModule],
      componentProperties: { movies: [movie] }, // Pasamos las películas como propiedad del componente     
    });

    // Ahora  realiza pruebas en el componente renderizado
 
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('2022')).toBeTruthy();
  
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  
    // Usamos Testing Library para buscar los elementos que contienen los títulos de las películas
    const movieTitle1 = getByText('Movie 1');
    const movieTitle2 = getByText('Movie 2');
  
    expect(movieTitle1).toBeTruthy();
    expect(movieTitle2).toBeTruthy();
  });
  
});
  

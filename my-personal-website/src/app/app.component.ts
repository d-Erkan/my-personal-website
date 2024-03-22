import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  name = 'Defne Erkan';
  partsArray = [
    { title: 'my CV', link: 'https://docs.google.com/document/d/1963o3OGAFyJthm5GUpdpH64_KYx1U40GnDtNMrHL8TM/edit?usp=sharing' },
    { title: 'Linkedin', link: 'https://www.linkedin.com/in/defneerkan/' },
    { title: 'Github', link: 'https://github.com/d-Erkan' },
];

}

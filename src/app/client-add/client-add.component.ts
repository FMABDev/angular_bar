import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
})
export class ClientAddComponent {
  client: any = {};

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit(): void {
    this.clientService.addClient(this.client).subscribe(
      () => this.router.navigate(['/clientes']),
      (error) => console.error('Error al agregar cliente', error)
    );
  }
}

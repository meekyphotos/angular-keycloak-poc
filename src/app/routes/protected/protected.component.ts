import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss'],
})
export class ProtectedComponent implements OnInit {
  name: string = '';
  constructor(private keycloak: KeycloakService) {}

  ngOnInit(): void {
    this.loadAndUpdateName().catch((err) => console.error(err));
  }

  async loadAndUpdateName() {
    const profile = await this.keycloak.loadUserProfile();
    this.name = profile?.username || 'No username';
  }
}

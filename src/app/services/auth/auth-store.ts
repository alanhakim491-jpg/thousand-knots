import { Injectable, signal, computed, inject } from '@angular/core';
import { TokenStorage } from './token-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private storage = inject(TokenStorage);

  private tokenSig = signal<string | null>(this.storage.get());

  token = computed(() => this.tokenSig());
  isLoggedIn = computed(() => !!this.token());

  setToken(token: string) {
    this.storage.set(token);
    this.tokenSig.set(token);
  }

  logout() {
    this.storage.clear();
    this.tokenSig.set(null);
  }
}

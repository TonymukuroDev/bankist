import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";
import { Modal } from "./components/modal/modal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Modal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

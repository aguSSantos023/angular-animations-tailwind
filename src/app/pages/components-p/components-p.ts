import { Component } from '@angular/core';
import { BtnStyleCreateGeminFreeC } from "./components/btns/btn-style-create-gemin-free-c/btn-style-create-gemin-free-c";
import { BtnStyleCreateGeminProC } from "./components/btns/btn-style-create-gemin-pro-c/btn-style-create-gemin-pro-c";

@Component({
  selector: 'app-components-p',
  imports: [BtnStyleCreateGeminFreeC, BtnStyleCreateGeminProC],
  templateUrl: './components-p.html',
  styleUrl: './components-p.css',
})
export class ComponentsP {

}

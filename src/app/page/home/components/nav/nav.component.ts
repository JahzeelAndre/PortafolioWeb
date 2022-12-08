import { Component, OnInit, HostListener } from '@angular/core';
import { faUser, faGraduationCap, faLaptopFile, faEnvelopesBulk, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public profileIcon = faUser;
  public studiesIcon = faGraduationCap;
  public worksIcon = faLaptopFile;
  public contactIcon = faEnvelopesBulk;
  public barsIcon = faBars;

  public screenWidth: number = 0;
  public isHidden: boolean = false;

  ngOnInit(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.isHidden = true;
    }else {
      this.isHidden = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth > 768){
      this.isHidden = false;
    }else if(this.screenWidth <= 768 && this.screenWidth > 0) {
      this.isHidden = true;
    }
  }

  showNav() {
    this.isHidden = !this.isHidden;
  }
}

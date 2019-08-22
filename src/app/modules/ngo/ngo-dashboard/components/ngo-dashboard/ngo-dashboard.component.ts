import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css']
})
export class NgoDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTab(option) {
    switch (option) {
      case 'MAP': this.router.navigate(['map'])
        break;
      case 'INVENTORY': this.router.navigate(['inventory'])
        break;
      // case 'ORDER': this.router.navigate(['/track'])
      //   break;
      // case "ACTIVE_ORDER": this.router.navigate(['/request'])
      //   break;
      // case "SHOW_MAP": this.router.navigate(['/map'])
      //   break;
      // case "DASHBOARD": this.router.navigate([''])
      //   break;
    }
  }
}

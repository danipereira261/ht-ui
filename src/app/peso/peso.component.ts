import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-peso',
    templateUrl: './peso.component.html',
    styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    home() {
        this.router.navigate(['home'])
    }
}

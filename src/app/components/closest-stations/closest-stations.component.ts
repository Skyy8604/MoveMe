import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../service/location.service";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-closest-stations',
  templateUrl: './closest-stations.component.html',
  styleUrls: ['./closest-stations.component.css']
})
export class ClosestStationsComponent implements OnInit {

  public closestStations: any;

  constructor(private locationService: LocationService, private formComponent: FormComponent) {
    this.closestStations = null;
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.locationService.getClosestStationToCoords(position.coords.latitude, position.coords.longitude, position.coords.accuracy).subscribe(
        (result) => {
          this.closestStations = result.slice(0, 5);
          console.log(this.closestStations);
        });
    })
  }

  addLabelToForm(label: string): void{
    this.formComponent.addStationToStartPoint(label);
  }
}

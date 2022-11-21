import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../service/location.service";
import {FormComponent} from "../form/form.component";
import {StationModel} from "../../model/station.model";

@Component({
  selector: 'app-closest-stations',
  templateUrl: './closest-stations.component.html',
  styleUrls: ['./closest-stations.component.css']
})
export class ClosestStationsComponent implements OnInit {

  public closestStations: StationModel[] = [];
  public err: any = null;

  constructor(private locationService: LocationService, private formComponent: FormComponent) {
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.locationService.getClosestStationToCoords(position.coords.latitude, position.coords.longitude, position.coords.accuracy).subscribe(
        (result) => {
          this.closestStations = result.slice(0, 5); // show the first five results
        }, (error) => this.err = error)
    }, (error) => this.err = error)
  }

  addLabelToForm(label: string): void {
    this.formComponent.addStationToStartPoint(label);
  }
}

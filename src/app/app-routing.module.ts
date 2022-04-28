import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlannerComponent} from "./components/planner/planner.component";
import {FormsComponent} from "./components/forms/forms.component";
import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterComponent} from "./components/characters/character/character.component";
import {LocationsComponent} from "./components/locations/locations.component";
import {LocationComponent} from "./components/locations/location/location.component";
import {PeopleComponent} from "./components/people/people.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planner',
    pathMatch: 'full',
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'locations/:id',
    component: LocationComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
